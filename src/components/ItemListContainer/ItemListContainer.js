import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react"
import { getProducts,getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom';
import { queryAllByAltText } from '@testing-library/react';
import {db} from "../servicesfb/firebaseConfig";
import { getDocs, collection, query, where, } from 'firebase/firestore';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);
    const { categoryId } = useParams();
  
    useEffect(() => {
      setloading(true)

    const collectionRef = categoryId
    ? query(collection(db,'products'),where('category','==',categoryId))
    :collection(db,'products')

    getDocs(collectionRef)
    .then(response => {
      const productsAdapted = response.docs.map(doc =>{
        const data = doc.data()
        return { id: doc.id, ...data}
      })
      setProducts(productsAdapted)
    })
    .catch(error =>{
      console.log(error)
    })
    .finally(()=> {
      setloading(false)
    })

    }, [categoryId]);
  
    return (
      <div>
        <h2>{greeting}</h2>
        <ItemList products={products} />
      </div>
    );
  }
  
  export default ItemListContainer;