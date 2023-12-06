import React from "react";
import { Link } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrTvCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in mx-2">
      <Link to={`/tvdetails/${movie.id}`}>
        <img src={IMAGE_BASE_URL + movie.backdrop_path} className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer" />
        <h2 className="w-[110px] md:w-[260px] text-white mt-2 hover:text-blue-700 cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis">{movie.name}</h2>
      </Link>
    </section>
  );
}

export default HrTvCard;
