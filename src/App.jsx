import image from "./assets/image/Noobar color.svg";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Routes, Route } from "react-router-dom";
import OriginalPage from "./pages/OriginalPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import WatchlistPage from "./pages/WatchlistPage";
import DetailMovieComponent from "./components/DetailMovieComponent";
import DetailTvComponent from "./components/DetailTvComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
        <Route path="/original" element={<OriginalPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/moviedetails/:id" element={<DetailMovieComponent />} />
        <Route path="/tvdetails/:id" element={<DetailTvComponent />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
