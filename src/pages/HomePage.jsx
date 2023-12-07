import React from "react";
import SliderComponent from "../components/SliderComponent";
import CompanieComponent from "../components/CompanieComponent";
import GenreMovieList from "../components/GenreMovieList";

function HomePage() {
  return (
    <div className="pt-[90px]">
      <SliderComponent />
      <CompanieComponent />
      <GenreMovieList />
    </div>
  );
}

export default HomePage;
