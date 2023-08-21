import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button type="button" className="btn btn-primary" onClick={handleDecrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>+</button>
            </div>
            <div>
                <button
                    className="btn btn-danger"
                    onClick={() => onAdd(quantity)}
                    disabled={!stock}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount;