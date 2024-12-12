import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; 
const Laptops = () => {
  const [products, setProducts] = useState([]);
  let API='https://dummyjson.com/products/category/laptops';
  const { addToCart } = useCart();
  const fetchProducts = async (url) => {
    try{
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products); 
    }catch(error){
      console.log(error);
    };
  };
  useEffect(() => {
    fetchProducts(API); 
  }, []); 

  return (
    <div className="popular-products">
      <h2>Laptops</h2>
      <div className="container">
        {products.map((product) => (
          <Link to={`/Item/${product.id}`}   key={product.id}>

          <div className="card">
            <img
              src={product.images[0]} 
              className="image"
              />
            <div className="productinfo">
              <h3 className="name">{product.name}</h3>
              <p className="description">{product.description.slice(0,70)}...</p>
              <span className="price">${product.price}</span> <span><button className='cartbutton' onClick={() => addToCart(product)}>Add to cart</button></span>
            </div>
          </div>
              </Link>
        ))}
      </div>
    </div>
  );
};

export default Laptops;
