import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Order from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
      <div className="app">
        <Navbar  setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
