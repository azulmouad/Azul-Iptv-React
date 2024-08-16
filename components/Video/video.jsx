import "./videoPlayer.css";

const VIDEO_DEMO =
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4";

const VideoPlayer = () => {
  return (
    <video className="video-player" src={VIDEO_DEMO} controls muted></video>
  );
};

export default VideoPlayer;
