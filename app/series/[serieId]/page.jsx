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

const COVER_IMAGE =
  "https://wbd.com/wp-content/uploads/2022/06/HOTD_27x40sm-1688x2500.jpg";

const SerieDetails = (props) => {
  const serieId = props.params.serieId;

  return (
    <div className="serie-page">
      <NavBarHome />
      <div
        className="background"
        style={{
          background: `linear-gradient(to top, #293E9F, #00000080), url(${COVER_IMAGE}) no-repeat top center`,
        }}
      ></div>

      <div className="container">
        <div className="cover_movie">
          <img src={COVER_IMAGE} alt="movie cover" />
          <StarRating rating={2} />
        </div>
        <div className="container-content">
          <h1>Hello</h1>
          <div className="container-info">
            <InfoMovie
              icon={director_icon}
              maxLenght={10}
              body="Greg Berlanti"
              title="Director"
            />
            <InfoMovie
              icon={release_icon}
              maxLenght={10}
              body="2029-09-00"
              title="Release Date"
            />
            <InfoMovie
              icon={duration_icon}
              maxLenght={10}
              body="02:12:18"
              title="Duration"
            />
            <InfoMovie
              icon={genre_icon}
              body="Comedy,Romance History"
              title="Genre"
              maxLenght={20}
            />
            <InfoMovie
              icon={cast_icon}
              body="Scarlett Jhonsson, Channing Mouadn, Soufaine zizi, Chaima baqouchn, hicham hmrita"
              title="Cast"
              maxLenght={20}
            />
            <InfoMovie
              icon={plot_icon}
              maxLenght={320}
              body={
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum porro debitis quo. Numquam ea omnis veritatis architecto minima iure, tempora unde natus reprehenderit quam quas? Voluptate quod similique culpa tenetur?  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum porro debitis quo. Numquam ea omnis veritatis architecto minima iure, tempora unde natus reprehenderit quam quas? Voluptate quod similique culpa tenetur?"
              }
              title="Plot"
            />
            <div className="card-watch-trailer">
              <Link href={`${serieId}/1`}>
                <button className="watch-button">Seasons</button>
              </Link>
              <button className="watch-button">Trailer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerieDetails;
