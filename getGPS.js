const request = require('request')
const auth = require('./authentication.js')
const mapKey = "mapKey"
const mapAuthentication = auth.GetAuthentication(mapKey)

const GetCoordinates = (city, state) => {

    console.log(city)
    console.log(state)
    // Create URL to fetch GPS coordinates
    const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + city + "%20" + state + ".json?access_token=" + mapAuthentication + "&language=en&limit=1"

    // Request latitude and longitude from location
    request({url: mapUrl, json: true}, (error, response) => {
    // Parse map data
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]

    // Return latitude and longitude
    const output = []
    return output

    })
}

module.exports = {
    GetCoordinates: GetCoordinates
}