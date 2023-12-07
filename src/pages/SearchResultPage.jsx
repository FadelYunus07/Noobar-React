import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import GlobalAPI from "../Services/GlobalAPI";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const SearchResultsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GlobalAPI.searchAll(query);
        const filteredResults = response.data.results.filter((result) => !result.adult);

        setSearchResults(filteredResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  // Separate movies and TV shows
  const movies = searchResults.filter((result) => result.media_type === "movie");
  const tvShows = searchResults.filter((result) => result.media_type === "tv");

  return (
    <div className="pt-[100px] md:w-full md:ms-2 ms-7">
      <h2 className="text-[25px] font-bold text-center">Search Results for "{query}"</h2>

      {/* Movies Section */}
      {movies.length > 0 && (
        <>
          <h1 className="sm:text-[20px] text-[30px] font-bold text-center">Movies</h1>
          <div className="flex flex-wrap">
            {movies.map((result) => (
              <div key={result.id} className="flex items-center m-3">
                <Link className="w-[110px] md:w-[200px] text-white mt-2 hover:text-blue-700 cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis" to={`/moviedetails/${result.id}`}>
                  {result.poster_path && <img className="w-[110px] md:h-[300px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer" src={IMG_BASE_URL + result.poster_path} alt={result.title} />}
                  <p className="mt-3">{result.title}</p>
                  <p className="text-[13px] text-gray-400">{result.release_date.slice(0, 4)}</p>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}

      {/* TV Shows Section */}
      {tvShows.length > 0 && (
        <>
          <h1 className="text-[30px] font-bold text-center">TV Shows</h1>
          <div className="flex flex-wrap">
            {tvShows.map((result) => (
              <div key={result.id} className="flex items-center m-3">
                <Link className="w-[110px] md:w-[200px] text-white mt-2 hover:text-blue-700 cursor-pointer whitespace-nowrap overflow-hidden overflow-ellipsis" to={`/tvdetails/${result.id}`}>
                  {result.poster_path && <img className="w-[110px] md:h-[300px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer" src={IMG_BASE_URL + result.poster_path} alt={result.name} />}
                  <p className="mt-3">{result.name}</p>
                  <p className="text-[13px] text-gray-400">{result.first_air_date.slice(0, 4)}</p>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
