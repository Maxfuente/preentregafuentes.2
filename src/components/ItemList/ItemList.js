import './ItemList.css'
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return(
        <div>

        <h1>Productos</h1>
        
        <div className="list-group">
            
            {products.map(prod => < Item key={prod.id}{...prod}/>)}
        </div>
        </div>
    )
}

export default ItemList