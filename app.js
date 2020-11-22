const request = require('request')
const auth = require('./authentication.js')
const weatherKey = "wKey"
const mapKey = "mapKey"
// Get authentication keys
const weatherAuthentication = auth.GetAuthentication(weatherKey)
const mapAuthentication = auth.GetAuthentication(mapKey)

// Create URL for weather app request
// Broken into several strings should we choose to change anything in url
const website = "http://api.weatherstack.com/"
const location = "41.763889,-88.290001" // lat and long for Aurora Illinois
const query = "current?access_key=" + weatherAuthentication + "&query=" + location + "&units=f"
const url = website + query

const tempCity = "Aurora"
const tempState = "Illinois"
// Create URL to fetch GPS coordinates
const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + tempCity + "%20" + tempState + ".json?access_token=" + mapAuthentication + "&language=en&limit="

// Request lattitude and longitude from location
request({url: mapUrl, json: true}, (error, response) => {
    // Parse map data
    lattitude = response.body.features[0].center[0]
    longitude = response.body.features[0].center[1]
    console.log(lattitude)
    console.log(longitude)
})



// Request weather data from weatherstack.com
request({url: url, json: true}, (error, response) => {
    // Parse weather data
    const degrees = response.body.current.temperature
    const feelsLike = response.body.current.feelslike 
    const desc = response.body.current.weather_descriptions[0]

    const output = desc + ". It is " + degrees + " degrees and it feels like " + feelsLike + " degrees."
    console.log(output)


})

// Geocoding 
// Address -> Lat/Long -> Weather
