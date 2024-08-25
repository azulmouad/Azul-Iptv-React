"use client";
import ListCaty from "@/components/List/List";
import NavBarLive from "@/components/NavBar/NavBarLive";
import VideoPlayer from "@/components/Video/video";
import "./live.css";
import { useEffect, useState } from "react";

const Live = () => {
  const [userData, setUserData] = useState({});
  //caty
  const [categories, setCategories] = useState([]);
  const [caty, setCaty] = useState();

  //cahnnels
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState();

  async function fetchCategories(userData) {
    try {
      // console.log(userData);
      setUserData(userData);

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

      const reformattedCategories = data.map((category) => ({
        id: category.category_id,
        name: category.category_name,
      }));

      setCategories(reformattedCategories);
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

  async function fetchChannels(id) {
    //update state
    setCaty(id);

    const response = await fetch("/api/live/channels", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${userData.user_info.username}`,
        password: `${userData.user_info.password}`,
        url: `http://${userData.server_info.url}:${userData.server_info.port}`,
        catyId: id,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    var data = await response.json();

    const reformattedCategories = data.map((channel) => ({
      id: channel.stream_id,
      name: channel.name,
    }));

    setChannels(reformattedCategories);
    console.log(data);
  }

  function playVideo(id) {
    setChannel(id);
    //TODO: play the video
  }

  return (
    <div className="live-page">
      <NavBarLive />
      <div className="live">
        <ListCaty
          title="Categories"
          list={categories}
          selectCaty={fetchChannels}
          selected={caty}
        />
        <hr />
        <ListCaty
          title="Channels"
          list={channels}
          selectCaty={playVideo}
          selected={channel}
        />
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
