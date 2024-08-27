import "./videoPlayer.css";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  if (url === null) {
    return <div className="video-player"></div>;
  }

  console.log("PLAY VIDEO:", `${url}.m3u8`);
  return (
    <div className="video-player">
      <ReactPlayer
        url={`${url}.m3u8`}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
