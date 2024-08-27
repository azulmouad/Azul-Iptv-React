import "./videoPlayer.css";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  if (url === null) {
    return <div className="video-player"></div>;
  }

  var videoUrl = `${url}.m3u8`;
  console.log("PLAY VIDEO:", videoUrl);
  return (
    <div className="video-player">
      <ReactPlayer
        url={videoUrl}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
