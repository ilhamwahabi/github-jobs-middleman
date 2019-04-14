const express = require('express')
const axios = require('axios')

const app = express()

const baseUrl = "https://jobs.github.com"

app.get('/jobs', async (request, response) => {
  try {
    let accQuery = ""
    for (let query in request.query) {
      accQuery += `&${query}=${request.query[query]}`
    }

    let requestUrl = `${baseUrl}/positions.json`
    if (accQuery) requestUrl += `?${accQuery.slice(1)}`

    const axiosResponse = await axios.get(requestUrl)
    response.send(axiosResponse.data)
  } catch (error) {
    response.status(400).send({
      message: 'error occurred'
    })
  }
})

app.listen(3000, () => {
  console.log('Server is running')
})