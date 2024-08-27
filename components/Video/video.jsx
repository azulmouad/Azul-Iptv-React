import "./videoPlayer.css";
import ReactPlayer from "react-player";

const VIDEO_DEMO =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";

const VideoPlayer = ({ url }) => {
  if (url === null) {
    return <div className="video-player">select player</div>;
  }
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
