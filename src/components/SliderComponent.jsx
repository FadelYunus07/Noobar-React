import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";

function SliderComponent() {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original/";
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    GlobalAPI.getPopularMovies.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <i className="hidden md:block fa-solid fa-chevron-left absolute text-white text-[30px] mx-9 my-[150px] cursor-pointer" onClick={() => sliderLeft(elementRef.current)}></i>
      <i className="hidden md:block fa-solid fa-chevron-right absolute text-white text-[30px] mx-9 my-[150px] cursor-pointer right-0" onClick={() => sliderRight(elementRef.current)}></i>
      <div className="flex overflow-x-auto px-16 py-4 w-full scrollbar-none scroll-smooth" ref={elementRef}>
        {movieList.map((popular, index) => {
          return (
            <img src={BASE_IMG_URL + popular.backdrop_path} alt={popular.title} className="min-w-full md:h-[310px] object-cover mr-4 rounded-md object-right-top hover:border-[5px] border-gray-500 transition-all duration-100 ease-in" />
          );
        })}
      </div>
    </div>
  );
}

export default SliderComponent;
