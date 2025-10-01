import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({products}) {
  const { id } = useParams();
  const product = products.find(p=>p.id===parseInt(id))
  const navigate = useNavigate();

  if (!product) return <p>...loading</p>;
  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "200px" }}
      />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}
export default ProductDetails;
