const request = require('request')
const auth = require('./authentication.js')

// Get authentication key
const authentication = auth.GetAuthentication()
// Create URL for weather app request
// Broken into several strings should we choose to change anything in url
const website = "http://api.weatherstack.com/"
const location = "41.763889,-88.290001" // lat and long for Aurora Illinois
const query = "current?access_key=" + authentication + "&query=" + location
const url = website + query

// Request weather data from weatherstack.com
request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
