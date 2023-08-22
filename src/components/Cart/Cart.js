import { useContext } from "react"

import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import CartContext from "../../Context/CartContext"


const Cart =() => {
const { cart, clearCart, totalQuantity} = useContext(CartContext)

let total = 0;
        cart.forEach((p) => {
            total += p.price * p.quantity;});
if (totalQuantity === 0){
    return (
        <div>
            <h1>Carrito Vacio</h1>
            <Link to='/' className='Option'>Productos</Link>
        </div>
    )
}

return (
    <div>
        { cart.map(p => <CartItem key={p.id}{...p}/>)}
        <h3>Total:${total}</h3>
        <button onClick={()=> clearCart()} class="btn btn-primary">Vaciar Carrito</button>
        <Link to='/checkout' class="btn btn-primary">Pagar</Link>
    </div>
)
}
 

export default Cart