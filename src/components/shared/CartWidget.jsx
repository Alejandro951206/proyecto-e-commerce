import React from 'react';
import './styles/CartWidget.css';
import { FaShoppingCart } from "react-icons/fa"; 

const CartWidget = () => {

  return (    
    <div className="cart-widget"> 
          
      <div className="qty-display">5</div> 
      <FaShoppingCart className='cartStyle'/>            
  </div>
  );
};

export default CartWidget;
