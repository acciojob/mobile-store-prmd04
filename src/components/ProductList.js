import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import { NavLink } from "react-router-dom";

function ProductList({products}) {

  return <div className="product-list">
    {products.map((item=>
       <NavLink to={`/products/${item.id}`} key={item.id}>
      <div  className="item-list">
        <img src={item.image} alt={item.title}/>

        <div>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
        </div>
      </div>
      </NavLink>
    ))}
    
  </div>;
}
export default ProductList;
