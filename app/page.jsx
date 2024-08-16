import CardHome from "@/components/CardHome/CardHome.jsx";
import NavBarHome from "@/components/NavBar/NavBarHome.jsx";
import iconLive from "@/public/assets/live-icon.svg";
import iconMovie from "@/public/assets/movie-icon.svg";
import iconSerie from "@/public/assets/serie-icon.svg";

export default function Home() {
  return (
    <div className="home">
      <NavBarHome />

      <div className="card-homes">
        <CardHome title={"Live"} icon={iconLive} href={"live"} />
        <CardHome title={"Movies"} icon={iconMovie} href={"movies"} />
        <CardHome title={"Series"} icon={iconSerie} href={"series"} />
      </div>

      <h5 className="footer-home">CopyRight @MouadZizi</h5>
    </div>
  );
}
