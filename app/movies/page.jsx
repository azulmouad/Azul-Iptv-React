"use client";
import { useEffect, useState } from "react";
import NavBarLive from "@/components/NavBar/NavBarLive";
import ListCaty from "@/components/List/List";
import "./movies.css";

import MovieCard from "@/components/MovieCard/MovieCard";

const MoviesPage = () => {
  const [userData, setUserData] = useState({});
  //caty
  const [categories, setCategories] = useState([]);
  const [caty, setCaty] = useState();
  //cahnnels
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      fetchCategories(userData);
    }
  }, []);

  async function fetchCategories(userData) {
    try {
      // console.log(userData);
      setUserData(userData);

      const response = await fetch("/api/movies", {
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

  async function fetchMovies(id) {
    //update state
    setCaty(id);

    const response = await fetch("/api/movies/channels", {
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
    setChannels(data);
    //console.log(data);
  }

  return (
    <div>
      <NavBarLive />
      <div className="movie-home">
        <div className="live">
          <ListCaty
            title="Categories"
            list={categories}
            selectCaty={fetchMovies}
            selected={caty}
          />
        </div>
        <hr />

        <div className="grid-movies">
          {channels.map((item) => (
            <MovieCard
              href={{
                pathname: `/movies/${item.stream_id}`,
                query: {
                  title: item.name,
                  image: item.stream_icon,
                },
              }}
              key={item.stream_id}
              title={item.name}
              image={item.stream_icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
