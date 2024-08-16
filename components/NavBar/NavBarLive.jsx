import "./NavBar.css";
import Link from "next/link";

const NavBarLive = () => {
  return (
    <nav className="nav-home">
      <Link className="link-text" href="/">
        HOME LOGO
      </Link>
    </nav>
  );
};

export default NavBarLive;
