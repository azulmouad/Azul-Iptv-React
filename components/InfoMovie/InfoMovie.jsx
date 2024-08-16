import ReadMore from "@components/ReadMore/Reamore";

import Image from "next/image";
import "./InfoMovie.css";

const InfoMovie = ({ title, body, icon, maxLenght }) => {
  return (
    <div className="info-movie">
      <h3>
        {" "}
        <Image className="icon-readmore" src={icon} alt="dercitor" width={18} />
        {title}
      </h3>
      <ReadMore maxLenght={maxLenght}>{body}</ReadMore>
    </div>
  );
};

export default InfoMovie;
