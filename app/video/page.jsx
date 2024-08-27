"use client";
import ReactPlayer from "react-player";

const VideoPage = (props) => {
  var url = props.searchParams.videoUrl;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "black",
      }}
    >
      <ReactPlayer
        url={`${url}`}
        playing={true}
        controls={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPage;
