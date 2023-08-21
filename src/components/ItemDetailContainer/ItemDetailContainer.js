import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import './ItemDetailContainer.css'
import { getDoc, doc } from "firebase/firestore";
import { db } from "../servicesfb/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const {itemId} = useParams()
    
    useEffect(() => {
      setLoading(true)

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef)
    .then(response =>{
    const data = response.data()
    const productAdapted = { id: response.id, ...data}
    setProduct(productAdapted)
    })
    .catch(error=>{
      console.log(error)
    })
    .finally(()=> {
      setLoading(false)
    })
    }, [itemId]);
  
    return (
      <div className="ItemDetailContainer">
        {product && <ItemDetail {...product} />}
      </div>
    );
    
  }
  
  export default ItemDetailContainer;