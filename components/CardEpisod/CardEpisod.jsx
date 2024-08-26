import duration_icon from "@/public/assets/duration.svg";
import Image from "next/image";
import "./CardEpisod.css";

const COVER_IMAGE =
  "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg";

const CardEpisod = ({ episode, image }) => {
  // console.log(episode);

  return (
    <div className="card-episode">
      <img src={image} alt="Image Episod" />
      <div className="episod-info">
        <h4>{episode.title}</h4>
        <p>
          {" "}
          <Image
            className="icon-duration"
            src={duration_icon}
            alt="dercitor"
            width={18}
          />
          {episode.info.duration}
        </p>
      </div>
    </div>
  );
};

export default CardEpisod;
