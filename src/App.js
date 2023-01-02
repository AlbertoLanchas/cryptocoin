import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

import Blog from "./Pages/Blog";
import Community from "./Pages/Community";
import Contact from "./Pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" component={<Community />} />
        <Route path="/blog" component={<Blog />} />
        <Route path="/contact" component={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
