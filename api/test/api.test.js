const request = require('supertest')

const server = require('../src/server')

const countries = require('../src/data')

describe('GET /countries', () => {
  it('should return the list of countries', async () => {
    const response = await request(server)
      .get('/countries')
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(countries)
  })
})

describe('GET /countries/:code', () => {
  it('should return the country with the specified code', async () => {
    const country = countries[0]
    const response = await request(server)
      .get(`/countries/${country.code}`)
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(country)
  })
})

describe('POST /countries', () => {
  it('should success and return the added country', async () => {
    const newCountry = {
      name: "Mars",
      code: "MARS"
    }

    let numOfCountries = countries.length

    let response = await request(server)
      .post('/countries')
      .send(newCountry)
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(newCountry)

    response = await request(server)
      .get('/countries')
      .set('Accept', 'application/json')

    expect(response.body.length).toEqual(numOfCountries + 1)
  })
})

describe('PUT /countries/:code', () => {
  it('should success and return the modified country', async () => {
    const originalCountry = {
      "name": "Afghanistan",
      "code": "AF"
    }

    const modifiedCountry = {
      "name": "Afghanistan_modified",
      "code": "AF"
    }

    let response = await request(server)
      .put(`/countries/${originalCountry.code}`)
      .send(modifiedCountry)
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(modifiedCountry)

    response = await request(server)
      .get('/countries')
      .set('Accept', 'application/json')

    expect(response.body.length).toEqual(countries.length)
  })
})

describe('DELETE /countries/:code', () => {
  it('should return the deleted country', async () => {
    const country = {
      "name": "Åland Islands",
      "code": "AX"
    }

    let numOfCountries = countries.length

    let response = await request(server)
      .delete(`/countries/${country.code}`)
      .set('Accept', 'application/json')

    expect(response.headers["content-type"]).toMatch(/json/)
    expect(response.status).toEqual(200)
    expect(response.body).toEqual(country)

    response = await request(server)
      .get('/countries')
      .set('Accept', 'application/json')

    expect(response.body.length).toEqual(numOfCountries - 1)
  })
})