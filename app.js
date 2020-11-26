const auth = require('./authentication.js')
const gps = require('./getGPS.js')
const weatherInfo = require('./weatherInfo.js')

// Get city and state from user
const arguements = process.argv
const city = arguements[2]
const state = arguements[3]

if (!city || !state) {
    console.log("Please specify city and state!")
} else {

    gps.GetCoordinates(city, state, (error, data) => {

        if (error) {
            console.log(error)        
        } else {
            const {location, latitude, longitude} = data
            weatherInfo.GetWeatherInfo(latitude, longitude, (error, weatherData) => {
    
                if(error){
                    console.log(error)
                } else {
                    
                    const {degrees, feelsLike, desc} = weatherData
                    const output = location + " the weather right now is " +
                    desc + " It is currently "
                    + degrees + " degrees and it feels like "
                    + feelsLike + " degrees."
    
                    console.log(output)
                }
            })
        }    
    })
}







