import Link from "next/link";
import "./CardHome.css";
import Image from "next/image";

const CardHome = (props) => {
  return (
    <Link href={props.href} className="link-text card-home">
      <div>
        <Image
          className="card-home-icon"
          src={props.icon}
          alt={`${props.title} icon`}
        />
        <h3>{props.title}</h3>
        <p>2000 Channels</p>
      </div>
    </Link>
  );
};

export default CardHome;
