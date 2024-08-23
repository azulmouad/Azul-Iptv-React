import NavBarHome from "@components/NavBar/NavBarHome";
import "./season.css";
import CardEpisod from "@components/CardEpisod/CardEpisod";

const COVER_IMAGE =
  "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg";
const SeasonsPage = (props) => {
  console.log(props);

  return (
    <div className="season-page">
      <NavBarHome />
      <div
        className="background"
        style={{
          background: `linear-gradient(to top, #293E9F, #00000080), url(${COVER_IMAGE}) no-repeat top center`,
        }}
      ></div>
      <div className="container">
        <div className="list-seaons">
          <ul>
            <li>
              <hr />1 Seaosn
            </li>
            <li>2 Seaosn</li>
            <li>3 Seaosn</li>
            <li>4 Seaosn</li>
            <li>5 Seaosn</li>
          </ul>
        </div>

        <div className="list-episodes">
          <CardEpisod />
          <CardEpisod />
          <CardEpisod />
          <CardEpisod />
          <CardEpisod />
          <CardEpisod />
          <CardEpisod />
          <CardEpisod />
          <CardEpisod />
        </div>
      </div>
    </div>
  );
};

export default SeasonsPage;
