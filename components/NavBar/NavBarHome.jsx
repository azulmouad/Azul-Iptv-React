import Link from "next/link";
import "./NavBar.css";

const NavBarHome = () => {
  return (
    <div>
      <nav className="nav-home">
        <Link className="link-text" href="/">
          HOME LOGO
        </Link>
        <ul>
          <li className="link-text">Refresh</li>
          <Link className="link-text" href="/settings">
            <li>Settings</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarHome;
