import React from "react";
import "./Loading.css";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingPage = ({ image }) => {
  return (
    <div className="loading-page">
      <div
        className="background"
        style={{
          background: `linear-gradient(to top, #293E9F, #00000080), url(${image}) no-repeat top center`,
          backgroundSize: "cover",
        }}
      >
        <CircularProgress sx={{ mb: 1, p: 0 }} size={40} />
        <h1>Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingPage;
