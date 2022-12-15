import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.requestPopuler)
      .then((res) => setMovies(res.data.results))
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt=""
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="border rounded bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border rounded ml-4 text-white border-gray-300 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[40%] text-gray-300">{`${movie?.overview.slice(
            0,
            120
          )}...`}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
