import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productsData';
import { CartContext } from './CartContext';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="product-details">
      <div className="image-gallery">
        <img src={mainImage} alt={product.name} className="main-image"/>
        <div className="thumbnails">
          {product.images.map((img, idx) => (
            <img 
              key={idx} 
              src={img} 
              alt="thumb" 
              onClick={() => setMainImage(img)} 
              className="thumbnail-img"
            />
          ))}
        </div>
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <p>₹{product.price}</p>
        <p>Rating: {product.rating}⭐</p>
        <p>{product.description}</p>
        <h4>Specifications:</h4>
        <ul>
          {product.specifications.map((spec, idx) => <li key={idx}>{spec}</li>)}
        </ul>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
