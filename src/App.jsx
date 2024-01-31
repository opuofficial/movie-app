import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Movies from "./pages/Movies";
import MovieSummary from "./pages/MovieSummary";
import MovieTicket from "./pages/MovieTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieSummary />} />
        <Route path="/movie/ticket" element={<MovieTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
