import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import {
  getGenres,
  getGenresByMovies,
  getPopulerMovies,
} from "../services/api";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState(1)
  const [imbdPoint, setimbdPoint] = useState("1 ");
  const [sort, setSort] = useState("");
  
  
  
  useEffect(() => {
    (async () => {
      const gen = await getGenres();
      const dis = await getGenresByMovies(genre, sort, imbdPoint,page);
      setGenres(gen);

      setMovies(dis);
    })();
  }, [genre, sort, imbdPoint,page]);
  console.log("movies", imbdPoint);
  return (
    <div className="mx-36 mt-6 ">
      <div className="flex flex-row mx-8  ">
        <div>
          <div className="d-flex col-md-10 justify-content-end  ">
            <select
              style={{ width: "150px" }}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="text"
              value={imbdPoint}
              onChange={(e) => setimbdPoint(e.target.value)}
            >
              <option value="1">IMBD Puanı</option>
              <option value="9">9 ve üzeri</option>
              <option value="8">8 ve üzeri</option>
              <option value="7">7 ve üzeri</option>
              <option value="6">6 ve üzeri</option>
              <option value="5">5 ve üzeri</option>
              <option value="4">4 ve üzeri</option>
              <option value="3">3 ve üzeri</option>
              <option value="2">2 ve üzeri</option>
              <option value="1">1 ve üzeri</option>
            </select>
          </div>
        </div>
        <div className="d-flex row justify-content-end ml-2   ">
          <div className="d-flex col-md-10 justify-content-end  ">
            <select
              style={{ width: "150px" }}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              {genres.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="d-flex row justify-content-end  ml-2  ">
          <div className="d-flex col-md-10 justify-content-end  ">
            <select
              style={{ width: "150px" }}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="text"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {movies.map((movie) => (
              <div key={movie.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`}
                    alt="qwewq"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="">
                      <Link to={`/movie/${movie.id}`}>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 text-black text-base font-medium"
                        />
                        {movie.title}
                      </Link>
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {movie.release_date}
                    </p>
                  </div>
                  <span className="text-sm font-medium pr-2   rounded-lg text-gray-500">
                    {movie.vote_average}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <nav className="justify-end flex" aria-label="Page navigation example">
        <ul className="inline-flex  -space-x-px">
          <li>
            <button onClick={()=>setPage(page-1)} className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</button>
          </li>
          {
            page > 1 && (
              <li>
              <button  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page-1}</button>
            </li>
            )
          }
         
        
          <li>
            <button  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{page>0 ?page :1}</button>
          </li>
          {
            page > 0 && (
              <li>
              <button  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{ page+1 }</button>
            </li>
            )
          }
           <li>
            <button  onClick={()=>setPage(page+1)}  className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
          </li>
        </ul>
      </nav>
        </div>
        
      </div>
  
    </div>
  );
}

export default Movies;
