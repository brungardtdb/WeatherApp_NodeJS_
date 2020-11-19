const request = require('request')
const auth = require('./authentication.js')

// Get authentication key
const authentication = auth.GetAuthentication()
// Create URL for weather app request
// Broken into several strings should we choose to change anything in url
const website = "http://api.weatherstack.com/"
const location = "41.763889,-88.290001" // lat and long for Aurora Illinois
const query = "current?access_key=" + authentication + "&query=" + location + "&units=f"
const url = website + query

// Request weather data from weatherstack.com
request({url: url, json: true}, (error, response) => {
    // Parse authentication data
    const degrees = response.body.current.temperature
    const precipitation = response.body.current.precip 

    const output = "It is " + degrees + " degrees and there are " + precipitation + " inches of precipitation."
    console.log(output)

})
