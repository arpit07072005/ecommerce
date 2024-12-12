import React, { useState, useEffect } from "react";

const Offers = () => {
  const images = ["./ph.webp", "./ph2.jpg", "./ph3.jpg"]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((a) => (a + 1) % images.length); 
    }, 3000); 
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div>
      <div className="offers">
        <img src={images[currentImageIndex]} alt="" className="offersimage" />
      </div>
    </div>
  );
};

export default Offers;
