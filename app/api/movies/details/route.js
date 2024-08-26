import axios from "axios";

export const POST = async (request) => {
  try {
    const body = await request.json();
    // console.log("BODY:", body);
    const username = body.username;
    const password = body.password;
    const url = body.url;
    const movieId = body.movieId;

    console.log(
      `${url}/player_api.php?password=${password}&username=${username}&action=get_vod_info&vod_id=${movieId}`
    );

    var result = await axios.get(
      `${url}/player_api.php?password=${password}&username=${username}&action=get_vod_info&vod_id=${movieId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.status == 200) {
      var json = JSON.stringify(result.data);

      return new Response(json);
    }

    return new Response(JSON.stringify({ message: "Error" }), {
      status: result.status,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err }), {
      status: 401,
    });
  }
};
