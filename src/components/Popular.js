import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const Popular = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState(''); 
  const [loading, setLoading] = useState(false);

  const { addToCart } = useCart();

  const API = 'https://dummyjson.com/products?limit=194';

  const fetchProducts = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(API);
  }, []);
  const filterProducts = () => {
    let tempProducts = products;
    if (maxPrice) {
      tempProducts = tempProducts.filter(product => product.price <= parseFloat(maxPrice));
    }

    setFilteredProducts(tempProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [maxPrice]);

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="filters">
        <label>Max Price:</label>
        <input
        className='filterinput'
          type="number"
          placeholder="Enter max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      {loading ? (
        <p>Loading...</p> 
      ) : (
      <div className="container">
        {filteredProducts.map((product) => (
          <Link to={`/Item/${product.id}`} key={product.id}>
            <div className="card">
              <img src={product.images[0]} className="image" alt={product.name} />
              <div className="productinfo">
                <h3 className="name">{product.name}</h3>
                <p className="description">{product.description.slice(0, 70)}...</p>
                <span className="price">${product.price}</span>
                <span>
                  <button className="cartbutton" onClick={() => addToCart(product)}>
                    Add to cart
                  </button>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>)}
    </div>
  );
};

export default Popular;
