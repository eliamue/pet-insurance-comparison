import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Form from './components/Form';
import ItemDetail from './components/ItemDetail';
import About from './components/About';
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Form />} />
        <Route path="/:id" element={<ItemDetail/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}