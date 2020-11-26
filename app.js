const auth = require('./authentication.js')
const gps = require('./getGPS.js')
const weatherInfo = require('./weatherInfo.js')

// Get latitude and longitude for coor
const tempCity = "Aurora"
const tempState = "Illinois"
const tempLat = 41.763889
const tempLong = -88.290001

gps.GetCoordinates(tempCity, tempState, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        
        weatherInfo.GetWeatherInfo(data.latitude, data.longitude, (error, data) => {
            if(error){
                console.log(error)
            } else {
                const output = data.desc + " It is currently "
                + data.degrees + " degrees and it feels like "
                + data.feelsLike + " degrees."

                console.log(output)
            }
        })
    }    
})







