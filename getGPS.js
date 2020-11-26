const request = require('request')
const auth = require('./authentication.js')
const mapKey = "mapKey"
const mapAuthentication = auth.GetAuthentication(mapKey)

const GetCoordinates = (city, state, callback) => {

    // Create URL to fetch GPS coordinates
    const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(city) + "%20" + encodeURIComponent(state) 
    + ".json?access_token=" + encodeURIComponent(mapAuthentication) + "&language=en&limit=1"

    // Request latitude and longitude from location
    request({url: mapUrl, json: true}, (error, response) => {

        if (error) {
            callback("Unable to connect to location services!", undefined)
        } else if (response.body.message === "Not Found") {
            callback("Location " + response.body.message, undefined)
        } else {
                 
            //Parse map data  
            const data = {
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            }   

            callback(undefined, data)            
        }
    })    
}

module.exports = {
    GetCoordinates: GetCoordinates
}