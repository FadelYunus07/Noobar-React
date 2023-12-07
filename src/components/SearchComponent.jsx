// SearchComponent.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalAPI from "../Services/GlobalAPI";

const SearchComponent = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const history = useNavigate();

  const handleSearch = async () => {
    try {
      await GlobalAPI.searchAll(query, { include_adult: false });
      // Redirect to the search results page with the query as a parameter
      history(`/search?query=${encodeURIComponent(query)}`);
      // Close the search component
      onClose();
    } catch (error) {
      console.error("Error fetching search result: ", error);
    }
  };

  const handleKeyDown = (e) => {
    // Trigger search if Enter key is pressed
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    // Cleanup function to clear the search query when the component unmounts
    return () => setQuery("");
  }, []);

  return (
    <div className="absolute top-24 left-1 md:top-52 md:left-1/3 bg-black bg-opacity-50 rounded-lg p-5">
      <input className="h-10 py-3 w-[180px] md:w-[300px] text-gray-900 px-4 rounded-md bg-white" type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} placeholder="Search for movies or TV series" />
      <button onClick={handleSearch} className="ms-5 bg-blue-700 p-1.5 px-3 rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
