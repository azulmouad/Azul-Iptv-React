import axios from "axios";

//http://mg-x.live:8080
//username=53273523957822
//password=KgfxQnSHpQ

export const POST = async (request) => {
  const body = await request.json();
  console.log("BODY:", body);
  const username = body.username;
  const password = body.password;
  const url = body.url;

  console.log(
    `${url}/player_api.php?username=${username}&password=${password}`
  );

  try {
    var result = await axios.get(
      `${url}/player_api.php?username=${username}&password=${password}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000, // Set timeout to 10 seconds
      }
    );

    if (result.status == 200) {
      console.log("Login API Success");

      var json = JSON.stringify(result.data);

      return new Response(JSON.stringify(json));
    }

    return new Response(JSON.stringify({ message: "Error" }), {
      status: 404,
    });
  } catch (error) {
    if (error.response) {
      //  console.error("Error response:", error.response.data);
      return new Response(
        JSON.stringify({ message: `Error: ${error.response.data}` }),
        {
          status: error.response.status,
        }
      );
    } else if (error.request) {
      //  console.error("Error request:", error.request);
      return new Response(
        JSON.stringify({ message: "No response received from the server." }),
        {
          status: 504, // Gateway Timeout
        }
      );
    } else {
      console.error("Error message:", error.message);
      return new Response(
        JSON.stringify({ message: `Error: ${error.message}` }),
        {
          status: 500, // Internal Server Error
        }
      );
    }
  }
};
