import NavBarLive from "@/components/NavBar/NavBarLive";
import ListCaty from "@/components/List/List";
import MovieCard from "@/components/MovieCard/MovieCard";
import "./series.css";

const SeriesPage = () => {
  return (
    <div>
      <NavBarLive />
      <div className="serie-home">
        <div className="live">
          <ListCaty title="Categories" />
        </div>
        <hr />

        <div className="grid-series">
          <MovieCard href="/series/00" />
          <MovieCard href="/series/01" />
        </div>
      </div>
    </div>
  );
};

export default SeriesPage;
