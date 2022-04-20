import "./App.css";
import Header from "./compenents/Header";
import Home from "./compenents/Home";
import { BrowserRouter ,Routes, Route, Link} from "react-router-dom";
import Movies from "./compenents/Movies";
import Movie from "./compenents/Movie";
// 84c3ca08a3d308752200112e54823f34
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
      
   
 
        <Route path="movie/:movieId" index element={<Movie />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/"  element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
