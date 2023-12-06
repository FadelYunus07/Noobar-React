import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import { Link } from "react-router-dom";
import HrTvCard from "./HrTvCard";
import TvCard from "./TvCard";

function TvList({ genreId, index_ }) {
  const [tvList, setTvList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    getTvByGenreId();
  }, []);

  const getTvByGenreId = () => {
    GlobalAPI.getTvByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
      setTvList(resp.data.results);
    });
  };

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth - 500;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 500;
    }
  };

  return (
    <>
      {tvList.length > 0 && (
        <>
          <i className={`hidden md:block fa-solid fa-chevron-left absolute text-white text-[30px] mx-9 ${index_ % 3 === 0 ? "my-[77px]" : "my-[170px]"} cursor-pointer left-0`} onClick={sliderLeft}></i>
          <i className={`hidden md:block fa-solid fa-chevron-right absolute text-white text-[30px] mx-9 ${index_ % 3 === 0 ? "my-[77px]" : "my-[170px]"} cursor-pointer right-0`} onClick={sliderRight}></i>
        </>
      )}
      <div ref={elementRef} className="flex overflow-x-auto py-5 w-full scroll-smooth scrollbar-none">
        {tvList.map((item, index) => (
          <Link to={`/tvdetails/${item.id}`} key={item.id}>
            {index_ % 3 === 0 ? <HrTvCard movie={item} /> : <TvCard movie={item} />}
          </Link>
        ))}
      </div>
    </>
  );
}

export default TvList;
