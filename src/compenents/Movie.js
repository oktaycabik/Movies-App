import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovies, getSmilarMovies } from "../services/api";

function Movie() {
  const [smilarMovies, setSmilarMovies] = useState([]);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      const data = await getMovies(params.movieId);
      const res = await getSmilarMovies(params.movieId);
      setMovie(data);
      setSmilarMovies(res);
    })();
  }, []);
  console.log("movie", smilarMovies);
  let params = useParams();

  return (
    <>
      <div className="mx-36 mt-6">
        <div className="flex flex-row">
          <div className="">
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie?.poster_path}`}
              alt="qwewq"
              className=" "
              style={{ width: 600 }}
            />
          </div>
          <div className="ml-2">
            <div className="text-xl font-semibold pl-3">{movie?.title}</div>
            <div className=" bg-slate-100 rounded-lg   p-3">
              {movie?.overview}
            </div>
            <div className="flex   p-3 ">
              <div className="w-32">Yapımcı Şirket:</div>
              <div className="ml-5">
                {movie?.production_companies?.map((a) => (
                  <span>{` ${a?.name},`}</span>
                ))}
              </div>
            </div>
            <div className="flex p-3 bg-slate-100 rounded-lg">
              <div className="w-32">Yapımcı Ülke:</div>
              <div className="ml-5">
                {movie?.production_countries?.map((a) => (
                  <span>{` ${a?.name},`}</span>
                ))}
              </div>
            </div>
            <div className="flex  p-3">
              <div className="w-32">Tür:</div>
              <div className="ml-5">
                {movie?.genres?.map((a) => (
                  <span> {` ${a?.name},`}</span>
                ))}
              </div>
            </div>
            <div className="flex  bg-slate-100 rounded-lg p-3">
              <div className="w-32">Yayınlanma Tarihi:</div>
              <span className="ml-5">{movie?.release_date}</span>
            </div>
          </div>
        </div>
   
        <div className="bg-white -mt-12 ">
    
          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="mb-2 text-4xl font-semibold bg-slate-100 rounded-lg p-2 text-gray-500">Benzer Filmler</h1>
            <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {smilarMovies.map((movie) => (
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
