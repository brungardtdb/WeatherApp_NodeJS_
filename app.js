const request = require('request')
const auth = require('./authentication.js')
const gps = require('./getGPS.js')
const weatherInfo = require('./weatherInfo.js')


// const weatherKey = "wKey"
// // Get authentication keys
// const weatherAuthentication = auth.GetAuthentication(weatherKey)

// Get latitude and longitude for coor
const tempCity = "Aurora"
const tempState = "Illinois"
const tempLat = 41.763889
const tempLong = -88.290001


gps.GetCoordinates(tempCity, tempState, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }    
})

weatherInfo.GetWeatherInfo(tempLat, tempLong, (error, data) => {
    if(error){
        console.log(error)
    } else {
        console.log(data)
    }
})





