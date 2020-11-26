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

    gps.GetCoordinates(city, state, (error, {location, latitude, longitude}) => {

        if (error) {
            console.log(error)        
        } else {
         
            weatherInfo.GetWeatherInfo(latitude, longitude, (error, {degrees, feelsLike, desc}) => {
    
                if(error){
                    console.log(error)
                } else {

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







