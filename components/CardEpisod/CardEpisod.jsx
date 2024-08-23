import duration_icon from "@/public/assets/duration.svg";
import Image from "next/image";
import "./CardEpisod.css";

const COVER_IMAGE =
  "https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg";

const CardEpisod = () => {
  return (
    <div className="card-episode">
      <img src={COVER_IMAGE} alt="Image Episod" />
      <div className="episod-info">
        <h4>Episode 1</h4>
        <p>
          {" "}
          <Image
            className="icon-duration"
            src={duration_icon}
            alt="dercitor"
            width={18}
          />
          40m 14s
        </p>
      </div>
    </div>
  );
};

export default CardEpisod;
