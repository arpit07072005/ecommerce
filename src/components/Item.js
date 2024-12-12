import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Item = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  const API = `https://dummyjson.com/products/${id}`;

  const fetchProduct = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct(API); 
  }, [id]); 
  return (
    <div className="products">
      <h2>{product.title}</h2>
      <div className="itemcontainer">
        <div key={product.id} className="itemimage">
          <img
            src={product.images ? product.images[0] : ''}
            alt={product.name}
            className="image"
          />
        </div>
          <div className="iteminfo">

            <p className="description"><b>Discription:</b>{product.description}</p>
            <span className="price"> ${product.price}</span>
            <div className="brand"><b>Brand: </b>{product.brand}</div>
            <div className="rating"><b>Rating </b>{product.rating}</div>
            <div className="stock"><b>Stock </b>{product.stock}</div>
            <div>
            
              <button className="cartbutton">Add to cart</button>
    
            </div>
          </div>
      </div>
    </div>
  );
};

export default Item;
