import { Timestamp, writeBatch,getDocs, addDoc ,collection, query, where,documentId } from "firebase/firestore"
import { useContext, useState } from "react"
import { db } from "../servicesfb/firebaseConfig"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import CartContext from "../../Context/CartContext"


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setorderId] = useState ('')

    const { cart, total, clearcart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)

    try {
        const objOrder = {
            buyer: {
                name, phone, email
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)

        const outOfStock = []

        const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'productos')

            const productosAgregadosdeFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productosAgregadosdeFirestore


            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productosAgregadosalCarro = cart.find(prod => prod.id === doc.id )
                const prodCantidad = productosAgregadosalCarro?.quantity

                if(stockDb >= prodCantidad){
                    batch.update(doc.ref, { stock: stockDb - prodCantidad})
                }else{
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setorderId(orderAdded.id)
                clearcart()
            }else{
                console.error('no hay stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }; 

    if(loading){
        return <h1>Cargando compra...</h1>
    }

    if(orderId){
        return <h1>Gracias por tu compra! el id es: {orderId}</h1>
    }

    return(
        <div>
            <h1 className="text-dark">Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )

}

export default Checkout
    
        
    
    