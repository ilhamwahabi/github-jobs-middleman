const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const baseUrl = "https://jobs.github.com";
const PORT = process.env.port || 3000;

app.get("/jobs", async (request, response) => {
  try {
    let accQuery = "";
    for (let query in request.query) {
      accQuery += `&${query}=${request.query[query]}`;
    }

    let requestUrl = `${baseUrl}/positions.json`;
    if (accQuery) requestUrl += `?${accQuery.slice(1)}`;

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
    const axiosResponse = await axios.get(
      `${baseUrl}/positions/${request.params.id}.json`
    );
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
