import React from 'react';



import './styles/CartWidget.css';

const CartWidget = () => {
  //la lógica va siempre antes del return
  return (
    <div className="cart-widget"> 
      <div className="qty-display">5</div>
    </div>
  );
};

export default CartWidget;
