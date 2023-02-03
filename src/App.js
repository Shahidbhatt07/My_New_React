import "./App.css";
import Header from "./Components/Header";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Insta from "./Components/Insta";
import Mail from "./Components/Mail";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />}/> 
         
          {/* About */}
          <Route path="/about"element={<About />}/>
          
          {/* Contact */}
          <Route path="/contact" element={<Contact />}>
              <Route index element={ <Insta/>}/>
              <Route path="insta" element={ <Insta/>} />
              <Route path="mail" element={ <Mail/>} />
          </Route>
          {/* Error */}
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
