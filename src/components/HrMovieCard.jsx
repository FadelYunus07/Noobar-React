import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in mx-2">
      <img src={IMAGE_BASE_URL + movie.backdrop_path} className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer" />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 hover:text-blue-700 cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis">{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard;
