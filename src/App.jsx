import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Movies from "./pages/Movies";
import MovieSummary from "./pages/MovieSummary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieSummary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
