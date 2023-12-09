import image from "./assets/image/Noobar color.svg";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { Routes, Route } from "react-router-dom";
import OriginalPage from "./pages/OriginalPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import DetailMovieComponent from "./components/DetailMovieComponent";
import DetailTvComponent from "./components/DetailTvComponent";
import SearchResultsPage from "./pages/SearchResultPage";
import SearchComponent from "./components/SearchComponent";

function App() {
  const pathbase = "/noobar-react/";
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path={pathbase} element={<HomePage />} />
        <Route path={`${pathbase}/movie`} element={<MoviePage />} />
        <Route path={`${pathbase}/series`} element={<SeriesPage />} />
        <Route path={`${pathbase}/moviedetails/:id`} element={<DetailMovieComponent />} />
        <Route path={`${pathbase}/tvdetails/:id`} element={<DetailTvComponent />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
