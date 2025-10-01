
import React,{useState, useEffect} from "react";
import './../styles/App.css';
import ProductList from "./ProductList";
import {Routes,Route} from "react-router-dom"
import  ProductDetails from "./ProductDetails";
import { NavBar } from "./NavBar";
import { AdminPanel } from "./AdminPanel";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
  async function fetchProducts() {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      if (!response.ok) throw new Error("Failed to fetch");
      const dataArray = await response.json();
      setProducts(dataArray);
    } catch (err) {
      alert(`Error: ${err}`);
    }
  }
  fetchProducts();
}, []);

  return (
    <>
    <NavBar/>
   <Routes>
    <Route path="/" element={<ProductList products={products}/>}></Route>
    <Route path="/products/:id" element={<ProductDetails  products={products}/>} />
    <Route path="/admin" element={<AdminPanel products={products} setProducts={setProducts} />} />
   </Routes>
   </>
  )
}

export default App
