"use client";
import { useEffect, useState } from "react";
import InfoMovie from "@components/InfoMovie/InfoMovie";
import "./movie-details.css";
import NavBarHome from "@components/NavBar/NavBarHome";
import StarRating from "@components/Rating/Rating";
import director_icon from "@/public/assets/director.svg";
import genre_icon from "@/public/assets/genre.svg";
import release_icon from "@/public/assets/release_date.svg";
import duration_icon from "@/public/assets/duration.svg";
import cast_icon from "@/public/assets/cast.svg";
import plot_icon from "@/public/assets/plot.svg";
import LoadingPage from "@components/Loading/Loading";

const MovieDetails = (props) => {
  const [details, setDetails] = useState();
  var movieId = props.params.movieId;
  var data = props.searchParams;

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      fetchMovieDetails(userData);
    }
  }, []);

  async function fetchMovieDetails(userData) {
    const response = await fetch("/api/movies/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${userData.user_info.username}`,
        password: `${userData.user_info.password}`,
        url: `http://${userData.server_info.url}:${userData.server_info.port}`,
        movieId: movieId,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    var data = await response.json();
    setDetails(data);
  }

  if (!details) {
    return <LoadingPage image={data.image} />;
  }

  var info = details.info;

  return (
    <div className="movie-page">
      <NavBarHome />
      <div
        className="background"
        style={{
          background: `linear-gradient(to top, #293E9F, #00000080), url(${
            info.backdrop_path && info.backdrop_path.length > 0
              ? info.backdrop_path[0]
              : data.image
          }) no-repeat top center`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="container">
        <div className="cover_movie">
          <img src={data.image} alt="movie cover" />
          <StarRating rating={info.rating} />
        </div>
        <div className="container-content">
          <h1>{data.title}</h1>
          <div className="container-info">
            <InfoMovie
              icon={director_icon}
              maxLenght={10}
              body={info.director}
              title="Director"
            />
            <InfoMovie
              icon={release_icon}
              maxLenght={10}
              body={info.releasedate}
              title="Release Date"
            />
            <InfoMovie
              icon={duration_icon}
              maxLenght={10}
              body={info.duration}
              title="Duration"
            />
            <InfoMovie
              icon={genre_icon}
              body={info.genre}
              title="Genre"
              maxLenght={20}
            />
            <InfoMovie
              icon={cast_icon}
              body={info.cast}
              title="Cast"
              maxLenght={20}
            />
            <InfoMovie
              icon={plot_icon}
              maxLenght={320}
              body={info.plot}
              title="Plot"
            />
            <div className="card-watch-trailer">
              <button className="watch-button">Watch Now</button>

              {info.youtube_trailer && info.youtube_trailer !== "" ? (
                <button className="watch-button">Trailer</button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
