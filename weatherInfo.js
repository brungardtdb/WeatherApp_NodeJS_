const request = require('request')
const auth = require('./authentication.js')
const weatherKey = "wKey"
// Get authentication keys
const weatherAuthentication = auth.GetAuthentication(weatherKey)

const GetWeatherInfo = (lat, lon, callback) => {

    //Create URL for weather app request
    //Broken into several strings should we choose to change anything in url
    const latitude = lat
    const longitude = lon
    const website = "http://api.weatherstack.com/"
    const location = latitude + ", " + longitude // lat and long for Aurora Illinois
    const query = "current?access_key=" + encodeURIComponent(weatherAuthentication) + 
    "&query=" + encodeURIComponent(location) + "&units=f"
    const url = website + query

    // Request weather data from weatherstack.com
    request({url: url, json: true}, (error, {body}) => {

        // Parse weather data
        const {current} = body
        
            if (error) {
                callback("Unable to connect to weather services!", undefined)
            } else if (body.error) {
            callback('Unable to find location', undefined)
            }    
            else {

                const data = {
                    degrees: current.temperature,
                    feelsLike: current.feelslike ,
                    desc: current.weather_descriptions[0]
                }
                    callback(undefined, data)
                }        
        })
}

module.exports = {
    GetWeatherInfo : GetWeatherInfo
}