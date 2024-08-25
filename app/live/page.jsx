"use client";
import ListCaty from "@/components/List/List";
import NavBarLive from "@/components/NavBar/NavBarLive";
import VideoPlayer from "@/components/Video/video";
import "./live.css";
import { useEffect, useState } from "react";

const Live = () => {
  const [categories, setCategories] = useState([]);
  const [caty, setCaty] = useState();

  async function fetchCategories(userData) {
    try {
      console.log(userData);

      const response = await fetch("/api/live", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: `${userData.user_info.username}`,
          password: `${userData.user_info.password}`,
          url: `http://${userData.server_info.url}:${userData.server_info.port}`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (err) {
      console.log("Error", err);
    }
  }
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      fetchCategories(userData);
    }
  }, []);

  return (
    <div className="live-page">
      <NavBarLive />
      <div className="live">
        <ListCaty
          title="Categories"
          list={categories}
          selectCaty={setCaty}
          selected={caty}
        />
        <hr />
        <ListCaty title="Channels" list={[]} />
        <hr />
        <div className="video">
          <VideoPlayer />
          <div className="card-epg">EPG LIST</div>
        </div>
      </div>
    </div>
  );
};

export default Live;
