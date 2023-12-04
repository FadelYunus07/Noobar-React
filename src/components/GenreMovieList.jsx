import GenreList from "../constant/GenreList";
import MovieList from "./MovieList";

function GenreMovieList() {
  return (
    <div className="p-8 px-8 md:px-16">
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
              <MovieList genreId={items.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
