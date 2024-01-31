import React from "react";
import "./Product.scss";
// @ts-ignore

import { useNavigate } from "react-router-dom";
import { ShimmerProduct } from "../shimmerCard/ShimmerProductPage";

function Product({ product }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="Product"
        onClick={() => navigate(`/products/${product.attributes?.key}`)}
      >
        <div className="product-container">
          <div className="product-img">
            <div className="img-container">
              
                <img
                  src={product?.attributes.images?.data.attributes.url}
                  alt={product?.attributes.title}
                  id={product?.attributes.key}
                />
          
            </div>
          </div>
          <div className="product-info">
            <p className="title"> {product?.attributes?.title}</p>
            <p className="price">₹{product?.attributes?.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;