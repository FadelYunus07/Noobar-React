import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import OriginalPage from "./pages/OriginalPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SeriesPage from "./pages/SeriesPage";
import DetailMovieComponent from "./components/DetailMovieComponent";
import DetailTvComponent from "./components/DetailTvComponent";
import SearchResultsPage from "./pages/SearchResultPage";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/original" element={<OriginalPage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/moviedetails/:id" element={<DetailMovieComponent />} />
        <Route path="/tvdetails/:id" element={<DetailTvComponent />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
