import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import{Welcome} from"./Components/Welcome";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Cart } from "./Components/Cart";
import { About } from "./Components/About"; 

import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Welcome />} /> 
            <Route path="/Home" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/About" element={<About />} /> 
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
