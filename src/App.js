import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Form from './components/Form';
import DetailContainer from './components/DetailContainer';
import ListContainer from './components/ListContainer';
import About from './components/About';
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route exact path="/:id" element={<DetailContainer/>} />
          <Route path="/add" element={<Form />} />
          <Route path="/list" element={<ListContainer/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}