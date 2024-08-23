"use client";
import { useState } from "react";
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

  function onLogin() {}

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

        <button onClick={onLogin()}>Login</button>
      </div>
    </div>
  );
};

export default loginPage;
