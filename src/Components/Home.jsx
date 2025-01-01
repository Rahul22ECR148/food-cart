import React, { useState } from 'react'
import data from "../assets/Products.json";
import { Product } from "./Product";
import "./Home.css";
export const Home = ({cart,setCart}) => {
    const [Products]=useState(data);
  return (
    <div className="Product-container">
        {Products.map((product) => (
          <Product key={Product.id} product={product} cart={cart} setCart={setCart}/>
        ))}
    </div>
  )
}
