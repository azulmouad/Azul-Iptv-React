import React from "react";
import play_icon from "@/public/assets/play.svg";
import Image from "next/image";
import Link from "next/link";
import "./MovieCard.css";

const COVER_IMAGE =
  "https://wbd.com/wp-content/uploads/2022/06/HOTD_27x40sm-1688x2500.jpg";

const MovieCard = ({ href, title, image }) => {
  return (
    <Link href={href}>
      <div className="movie-grid-item">
        <img className="cover-movie" src={image} alt="film cover" />
        <div className="movie-item-hover">
          <p>{title}</p>
        </div>
        <Image className="icon-play" alt="cover" src={play_icon} />
      </div>
    </Link>
  );
};

export default MovieCard;
