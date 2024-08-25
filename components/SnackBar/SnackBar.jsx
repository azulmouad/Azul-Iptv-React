"use client";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import "./SnackBar.css";

const SnackBar = ({ openSnack, setOpenSnack, title }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnack(false);
  };

  const action = (
    <div>
      <button className="snack-button" onClick={handleClose}>
        CLOSE
      </button>
    </div>
  );

  return (
    <div>
      <Snackbar
        open={openSnack}
        autoHideDuration={4000}
        onClose={handleClose}
        message={title}
        action={action}
      />
    </div>
  );
};

export default SnackBar;
