import React from "react";
import "./CartItem.css";
const CartItem = ({ id, name, price, category, quantity }) => {
  return (
    <div className="CartItem">
      <h4>{name}</h4>
      <p>Categoría: {category}</p> 
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <p>Total:${price * quantity}</p>
    </div>
  );
};

export default CartItem