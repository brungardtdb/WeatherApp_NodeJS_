const request = require('request')
const auth = require('./authentication.js')
const mapKey = "mapKey"
const mapAuthentication = auth.GetAuthentication(mapKey)

const GetCoordinates = async (city, state) => {

    const output = []
    // Create URL to fetch GPS coordinates
    const mapUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + city + "%20" + state + ".json?access_token=" + mapAuthentication + "&language=en&limit=1"

    return new Promise((resolve, reject) =>{
        // Request latitude and longitude from location
        request({url: mapUrl, json: true}, async (error, response) => {

            if (error) {

                reject(error)

            } else if (response.body.message === "Not Found") {
                console.log("Location " + response.body.message)
            }            
            else {
                 
                //Parse map data                 
                 const latitude = await response.body.features[0].center[1]
                 const longitude = await response.body.features[0].center[0]
                 output.push(latitude)
                 output.push(longitude)
                 resolve(output);
            }
        })

    })
    
}

module.exports = {
    GetCoordinates: GetCoordinates
}