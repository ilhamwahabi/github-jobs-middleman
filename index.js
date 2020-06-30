const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const BASE_URL = "https://jobs.github.com";
const PORT = process.env.port || 3000;

function getQuery(query) {
  let allQuery = "";
  for (let item in query) {
    allQuery += `&${item}=${query[item]}`;
  }
  return allQuery;
}

app.get("/", (_, response) => {
  response.send("Server is work!");
});

app.get("/jobs", async (request, response) => {
  try {
    const query = getQuery(request.query);

    let requestUrl = `${BASE_URL}/positions.json`;
    if (query) requestUrl += `?${query.slice(1)}`;

    const axiosResponse = await axios.get(requestUrl);
    response.send(axiosResponse.data);
  } catch (error) {
    response.status(400).send({
      message: "error occurred",
    });
  }
});

app.get("/jobs/:id", async (request, response) => {
  try {
    const query = getQuery(request.query);

    let requestUrl = `${BASE_URL}/positions/${request.params.id}.json`;
    if (query) requestUrl += `?${query.slice(1)}`;

    const axiosResponse = await axios.get(requestUrl);
    response.send(axiosResponse.data);
  } catch (error) {
    response.status(400).send({
      message: "error occurred",
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is running");
});
