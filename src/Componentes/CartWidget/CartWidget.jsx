import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='shoppingCart'>
      <img className="imgCarrito" src="/carro.png" alt="imagen carrito de compras en color negro" />
      <strong>2</strong>
    </div>
  )
}

export default CartWidget