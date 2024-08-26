import axios from "axios";

export const POST = async (request) => {
  try {
    const body = await request.json();
    console.log("BODY:", body);
    const username = body.username;
    const password = body.password;
    const url = body.url;
    const catyId = body.catyId;

    //http://go-room.life:8080/player_api.php?password=KgfxQnSHpQ&username=53273523957822&action=get_series&category_id=605

    console.log(
      `${url}/player_api.php?password=${password}&username=${username}&action=get_series&category_id=${catyId}`
    );

    var result = await axios.get(
      `${url}/player_api.php?password=${password}&username=${username}&action=get_series&category_id=${catyId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.status == 200) {
      var json = JSON.stringify(result.data);

      //console.log(json);

      return new Response(json, {
        status: 200,
      });
    }

    return new Response(JSON.stringify({ message: "Error" }), {
      status: 402,
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: err }), {
      status: 401,
    });
  }
};
