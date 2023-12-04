import image from "./assets/image/Noobar color.svg";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Routes, Route } from "react-router-dom";
import OriginalPage from "./pages/OriginalPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import WatchlistPage from "./pages/WatchlistPage";

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
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
