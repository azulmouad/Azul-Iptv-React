import axios from "axios";

export const POST = async (request) => {
  try {
    const body = await request.json();
    console.log("BODY:", body);
    const username = body.username;
    const password = body.password;
    const url = body.url;

    //console.log(`${url}/player_api.php?password=${password}&username=${username}&action=get_series_categories`);

    var proxyUrl = `https://mouadzizi.com/Projects/applications/player-azul-proxy.php?type=getSeriesCategories&username=${username}&password=${password}&url=${url}`;
    console.log(proxyUrl);

    var result = await axios.get(proxyUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

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
