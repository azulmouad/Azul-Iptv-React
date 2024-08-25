"use client";
import { useState } from "react";
import "./login.css";
import CircularProgress from "@mui/material/CircularProgress";
import SnackBar from "@components/SnackBar/SnackBar";

const loginPage = () => {
  //Snack
  const [openSnack, setOpenSnack] = useState(false);
  const [textSnack, setTextSnack] = useState("");

  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  function onUserName(e) {
    setUserName(e.target.value);
  }
  function onPassword(e) {
    setPassword(e.target.value);
  }
  function onUrl(e) {
    setUrl(e.target.value);
  }

  async function onLogin() {
    if (username !== "" && password !== "" && url !== "") {
      setLoading(true);
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            url: url,
          }),
        });

        if (!response.ok) {
          setOpenSnack(true);
          setTextSnack(`HTTP error! Status: ${response.status}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data);
        localStorage.setItem("userData", data); // Store data in localStorage
        console.log("User data saved to localStorage.");

        //show dnack
        setOpenSnack(true);
        setTextSnack(`Auth is Successfuly`);

        // Navigate to the homepage
        window.open("/", "_self");
      } catch (error) {
        console.error("Error during login:", error);
        setOpenSnack(true);
        setTextSnack(`Error during login: ${error}`);
      }
      setLoading(false);
    } else {
      console.log("EMPTY INPUTS");
      setOpenSnack(true);
      setTextSnack(`Inputs Are Empty!!`);
    }
  }

  const vertical = "bottom";
  const horizontal = "center";

  return (
    <div className="login">
      <div className="card-inputs">
        <label>UserName</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          onChange={onUserName}
          disabled={loading}
        />

        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          required
          onChange={onPassword}
          disabled={loading}
        />

        <label>Url</label>
        <input
          type="text"
          placeholder="url"
          name="url"
          required
          onChange={onUrl}
          disabled={loading}
        />

        <button className="button-login" onClick={onLogin}>
          {loading ? <CircularProgress sx={{ mr: 1, p: 0 }} size={20} /> : null}
          Login
        </button>
      </div>
      <SnackBar
        openSnack={openSnack}
        setOpenSnack={setOpenSnack}
        title={textSnack}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default loginPage;
