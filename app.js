const request = require('request')
const auth = require('./authentication.js')
const gps = require('./getGPS.js')
const weatherKey = "wKey"
// Get authentication keys
const weatherAuthentication = auth.GetAuthentication(weatherKey)

// Get latitude and longitude for coor
const tempCity = "Aurora"
const tempState = "Illinois"
const gpsCoordinates = gps.GetCoordinates(tempCity, tempState)
// const latitude = gpsCoordinates[0]
// const longitude = gpsCoordinates[1]

console.log(gpsCoordinates)

// Create URL for weather app request
// Broken into several strings should we choose to change anything in url
// const website = "http://api.weatherstack.com/"
// const location = latitude + ", " + longitude // lat and long for Aurora Illinois
// const query = "current?access_key=" + weatherAuthentication + "&query=" + location + "&units=f"
// const url = website + query

// // Request weather data from weatherstack.com
// request({url: url, json: true}, (error, response) => {
//     // Parse weather data
//     const degrees = response.body.current.temperature
//     const feelsLike = response.body.current.feelslike 
//     const desc = response.body.current.weather_descriptions[0]

//     const output = desc + ". It is " + degrees + " degrees and it feels like " + feelsLike + " degrees."
//     console.log(output)
// })

