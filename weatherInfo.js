const request = require('request')
const auth = require('./authentication.js')
const weatherKey = "wKey"

const GetWeatherInfo = (lat, lon, callback) => {

    // Get authentication keys
    const weatherAuthentication = auth.GetAuthentication(weatherKey)

    //Create URL for weather app request
    //Broken into several strings should we choose to change anything in url
    const latitude = lat
    const longitude = lon
    const website = "http://api.weatherstack.com/"
    const location = latitude + ", " + longitude // lat and long for Aurora Illinois
    const query = "current?access_key=" + encodeURIComponent(weatherAuthentication) + "&query=" + 
                encodeURIComponent(location) + "&units=f"
    const url = website + query

    console.log("PRINTING URL: " + url)

    // Request weather data from weatherstack.com
    request({url: url, json: true}, (error, response) => {
        // Parse weather data
    
            if (error) {
                callback("Unable to connect to weather services!", undefined)
            } else if (response.body.error) {
            callback('Unable to find location', undefined)
            }    
            else {
                const data = {
                    degrees: response.body.current.temperature,
                    feelsLike: response.body.current.feelslike ,
                    desc: response.body.current.weather_descriptions[0]
                }
                    callback(undefined, data)
                }        
        })
}

module.exports = {
    GetWeatherInfo : GetWeatherInfo
}