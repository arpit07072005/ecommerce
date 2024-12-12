import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Mobilephones = () => {
  const [products, setProducts] = useState([]);
  let API='https://dummyjson.com/products/category/mobile-accessories';
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
      <h2>Mobile-accessories</h2>
      <div className="container">
        {products.map((product) => (
          <Link to={`/Item/${product.id}`}>

          <div key={product.id} className="card">
            <img
              src={product.images[0]} 
              className="image"
              />
            <div className="productinfo">
              <h3 className="name">{product.name}</h3>
              <p className="description">{product.description.slice(0,70)}...</p>
              <span className="price">${product.price}</span> <span><button className='cartbutton'>Add to cart</button></span>
            </div>
          </div>
              </Link>
        ))}
      </div>
    </div>
  );
};

export default Mobilephones;

