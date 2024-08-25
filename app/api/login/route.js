import axios from "axios";

//http://mg-x.live:8080
//username=24367110633598
//&password=FaI0KdYHnz

export const POST = async (request) => {
  try {
    const body = await request.json();
    console.log("BODY:", body);
    const username = body.username;
    const password = body.password;
    const url = body.url;

    console.log(
      `${url}/player_api.php?username=${username}&password=${password}`
    );

    var result = await axios.get(
      `${url}/player_api.php?username=${username}&password=${password}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.status == 200) {
      var json = JSON.stringify(result.data);

      return new Response(JSON.stringify(json));
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
