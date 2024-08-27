"use client";
import { useEffect, useState } from "react";
import InfoMovie from "@components/InfoMovie/InfoMovie";
import "./serie-details.css";
import NavBarHome from "@components/NavBar/NavBarHome";
import StarRating from "@components/Rating/Rating";
import director_icon from "@/public/assets/director.svg";
import genre_icon from "@/public/assets/genre.svg";
import release_icon from "@/public/assets/release_date.svg";
import duration_icon from "@/public/assets/duration.svg";
import cast_icon from "@/public/assets/cast.svg";
import plot_icon from "@/public/assets/plot.svg";
import Link from "next/link";
import LoadingPage from "@components/Loading/Loading";
import CardEpisod from "@components/CardEpisod/CardEpisod";

const SerieDetails = (props) => {
  const [userData, setUserData] = useState({});

  const serieId = props.params.serieId;
  var data = props.searchParams;
  const [details, setDetails] = useState();
  //seaons & episode
  const [season, setSeason] = useState();

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      fetchMovieDetails(userData);
    }
  }, []);

  async function fetchMovieDetails(userData) {
    setUserData(userData);
    const response = await fetch("/api/series/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${userData.user_info.username}`,
        password: `${userData.user_info.password}`,
        url: `http://${userData.server_info.url}:${userData.server_info.port}`,
        serieId: serieId,
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
  var episodes = details.episodes;
  const selectedEpisodes = season ? episodes[season] : [];

  return (
    <div className="serie-page">
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
      >
        <div className="container">
          <div className="cover_movie">
            <img src={data.image} alt="movie cover" />
            <StarRating rating={info.rating_5based} />
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
                body={info.releaseDate}
                title="Release Date"
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
                {info.youtube_trailer && info.youtube_trailer !== "" ? (
                  <button className="watch-button">Trailer</button>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Seaosns */}
        <div>
          <div className="seasons-box">
            {Object.keys(episodes).map((seasonName) => (
              <button
                key={seasonName}
                className={`button-season ${
                  season === seasonName ? "selected" : ""
                }`}
                onClick={() => setSeason(seasonName)}
              >
                Season {seasonName}
              </button>
            ))}
          </div>
          <div className="episode-box">
            {selectedEpisodes.map((episode) => (
              <Link
                href={{
                  pathname: `/video`,
                  query: {
                    videoUrl: `http://${userData.server_info.url}:${userData.server_info.port}/series/${userData.user_info.username}/${userData.user_info.password}/${episode.id}.${episode.container_extension}`,
                  },
                }}
                className="link-remove-line"
              >
                <CardEpisod
                  key={episode.id}
                  episode={episode}
                  image={data.image}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerieDetails;
