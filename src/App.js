import "./App.css";
//routing
import { Route, Routes } from "react-router-dom";

//this is for react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//pagees
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PlayPage from "./pages/PlayPage";

function App() {
  return (
    <Routes>
      { <Route path="/" element={<HomePage />} /> /*element are responsible for showing our component*/}
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="play" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
