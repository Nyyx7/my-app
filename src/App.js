import React from "react";
import "./index.css";
import Home from "./rootes/Home";
import About from "./rootes/About";
import Project from "./rootes/Project";
import Contacts from "./rootes/Contacts";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;