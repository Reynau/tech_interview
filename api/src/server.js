const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const cors = require("./cors");
let countries = require('./data')

app.use(bodyParser.json())

app.use(cors);

app.get('/countries', (req, res) => {
  res.json(countries)
})

app.get('/countries/:code', (req, res) => {
  const { code } = req.params
  res.json(countries.find(country => country.code === code))
})

app.post('/countries', (req, res) => {
  countries.push(req.body)
  res.json(req.body)
})

app.put('/countries/:code', (req, res) => {
  const { code } = req.params
  let index = countries.findIndex(country => country.code === code)
  countries[index] = req.body
  res.json(req.body)
})

app.delete('/countries/:code', (req, res) => {
  const { code } = req.params

  let deletedCountry = null
  countries = countries.filter(country => {
    if (country.code === code) {
      deletedCountry = country
      return false
    }

    return true
  })

  res.json(deletedCountry)
})

module.exports = app