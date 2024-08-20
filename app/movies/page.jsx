import NavBarLive from "@/components/NavBar/NavBarLive";
import ListCaty from "@/components/List/List";
import "./movies.css";

import MovieCard from "@/components/MovieCard/MovieCard";

const MoviesPage = () => {
  return (
    <div>
      <NavBarLive />
      <div className="movie-home">
        <div className="live">
          <ListCaty title="Categories" />
        </div>
        <hr />

        <div className="grid-movies">
          <MovieCard href="/movies/00" />
          <MovieCard href="/movies/01" />
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
