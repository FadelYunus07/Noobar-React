import React from "react";
import TvList from "../components/TvList";
import GenreList from "../constant/GenreList";

function SeriesPage() {
  return (
    <div className="p-8 px-8 md:px-16 pt-[110px]">
      <h1 className="text-[30px] font-bold text-center">TV SERIES</h1>
      {GenreList.genre.map(
        (items, index) =>
          index <= 4 && (
            <div>
              <h2
                className="text-[20px] text-white 
        font-bold border-l-blue-700 border-l-[5px] ps-4"
              >
                {items.name}
              </h2>
              <TvList genreId={items.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default SeriesPage;
