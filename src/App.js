import "./App.css";
import Header from "./compenents/Header";
import Home from "./compenents/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./compenents/Movies";
import Movie from "./compenents/Movie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="movie/:movieId" index element={<Movie />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
