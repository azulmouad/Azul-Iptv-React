import ListCaty from "@/components/List/List";
import NavBarLive from "@/components/NavBar/NavBarLive";
import VideoPlayer from "@/components/Video/video";
import "./live.css";

const Live = () => {
  return (
    <div className="live-page">
      <NavBarLive />
      <div className="live">
        <ListCaty title="Categories" />
        <hr />
        <ListCaty title="Channels" />
        <hr />
        <div className="video">
          <VideoPlayer />
          <div className="card-epg">EPG LIST</div>
        </div>
      </div>
    </div>
  );
};

export default Live;
