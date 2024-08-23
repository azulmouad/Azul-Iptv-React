"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import "./login.css";

const loginPage = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [url, setUrl] = useState();

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
    try {
      const response = await fetch("/api/login");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

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
        />

        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          required
          onChange={onPassword}
        />

        <label>Url</label>
        <input
          type="text"
          placeholder="url"
          name="url"
          required
          onChange={onUrl}
        />

        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
};

export default loginPage;
