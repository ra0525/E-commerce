import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/productsData";
import "../styles/ProductDetails.css";
import { useCart } from "./CartContext";
import StarRating from './StarRating';

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const { addToCart } = useCart();
  // const { addToCart } = useContext(CartContext);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details-container">
      <div className="image-section">
        <div className="thumbnail-list">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumbnail-${index}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="main-image-container">
          <img src={selectedImage} alt={product.name} className="main-image" />
        </div>
      </div>

      <div className="details-section">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <StarRating rating={product.rating} />

        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <div className="section">
          {/* <h3>Specifications</h3> */}
          {/* <ul>
            {product.specifications &&
              Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}</strong> {value}
                </li>
              ))}
          </ul> */}
          <table className="spec-table">
            <tbody>
              {Object.entries(product.specifications).map(([key, value]) => (
                <tr key={key}>
                  <td className="spec-key">{key}</td>
                  <td className="spec-value">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section">
          <h2>About this item</h2>
          <ul className="about-list">
            {product.description.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        </div>

        {/* <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductDetails;
