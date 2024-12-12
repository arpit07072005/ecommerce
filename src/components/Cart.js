import React from 'react';
import { useCart } from '../CartContext'; 
const Cart = () => {
  const { cart, removeFromCart } = useCart();  

  return (
    <div>
      <h2> Cart</h2>
      {cart.length === 0 ? (
        <p className='initialcart'>Nothing here yet..🙄</p>
      ) : (
        <div className="container">
        {cart.map((product) => (
          <div key={product.id} className='cardcart'>
            
            <img
              src={product.images[0]} 
              className="image"
            />
            <div className="productinfo">
              <h3 className="name">{product.name}</h3>
              <p className="description">{product.description.slice(0,70)}...</p>
              <span className="price">${product.price}</span>
            </div>        
            <button onClick={() => removeFromCart(product.id) }className="removebutton">Remove</button> 
            <button className='buybutton'>Buy</button>
          </div>
        ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
