import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalAPI from "../Services/GlobalAPI";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const EmbeddedVideoModal = ({ embedUrl, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="video-container">
          <iframe title="YouTube Video" width="560" height="315" src={embedUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

function DetailComponent() {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [videoKey, setVideoKey] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getMovieDetails();
    getMovieTrailer();
  }, []);

  const getMovieDetails = () => {
    GlobalAPI.getMovieDetails(id).then((resp) => {
      console.log(resp.data);
      setDetail(resp.data);
    });
  };

  const getMovieTrailer = () => {
    GlobalAPI.getMovieTrailer(id).then((resp) => {
      console.log(resp.data);
      const videos = resp.data.results;
      const officialTrailer = videos.find((video) => video.site === "YouTube" && video.name === "Official Trailer");

      if (officialTrailer) {
        // Set the key for the Official Trailer
        setVideoKey(officialTrailer.key);
      } else if (videos.length > 0) {
        // If "Official Trailer" is not found, set the key for the first YouTube video
        setVideoKey(videos[0].key);
      }
    });
  };

  const handlePlayTrailer = () => {
    if (videoKey) {
      const embedUrl = `https://www.youtube.com/embed/${videoKey}`;
      setIsModalOpen(true);
    } else {
      alert("Trailer not available");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="absolute z-10 top-0 left-0 w-full h-[500px] bg-black opacity-80"></div>
      <img src={IMAGE_BASE_URL + detail.backdrop_path} className="w-full h-[500px] object-cover object-left-top" alt={detail.title} />
      <div className="grid grid-cols-4 gap-4  absolute top-0 left-0 z-10 h-[100%]">
        <img src={IMAGE_BASE_URL + detail.poster_path} className="w-[260px] ms-11 mt-[18%] rounded-lg object-cover" alt={detail.title} />
        <div className=" col-span-2 pt-10">
          <h1 className="text-[50px]">{detail.title}</h1>
          <p>{detail.tagline}</p>
          <div className="flex gap-5 mt-5">
            <p className="self-center">
              <i className="fa fa-user me-3"></i>
              {detail.popularity}
            </p>
            <p className="self-center">
              <i className="fa fa-usd me-3"></i>
              {detail.budget && detail.budget.toLocaleString()}
            </p>
            {videoKey && (
              <button onClick={handlePlayTrailer} className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Play Trailer
              </button>
            )}
          </div>
          {detail.genres && (
            <ul className="flex">
              {detail.genres.map((genre) => (
                <li className="m-2 p-3 text-center font-bold text-[12px]" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          )}
          {/* Button to play the trailer */}
          <p className="text-justify">{detail.overview}</p>

          {/* Embedded video modal */}
          {isModalOpen && <EmbeddedVideoModal embedUrl={`https://www.youtube.com/embed/${videoKey}`} onClose={handleCloseModal} />}
        </div>
      </div>
    </div>
  );
}

export default DetailComponent;
