import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Form from "./components/Form";
import DetailContainer from "./containers/DetailContainer";
import ListContainer from "./containers/ListContainer";
import About from "./components/About";
import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Form />} />
          <Route exact path="/list" element={<ListContainer />} />
          <Route exact path="/:id" element={<DetailContainer />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
