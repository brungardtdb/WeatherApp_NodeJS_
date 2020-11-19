const fs = require('fs')

const GetAuthentication = () => {
    // Load data from JSON file for authentication
    const dataBuffer = fs.readFileSync('authentication.json')
    const dataJSON = dataBuffer.toString()
    const jsonString =  JSON.parse(dataJSON)  

    // Parse authentication data
    const authenticationObject = jsonString.find((note) => note.title === "Key")

    if (!authenticationObject) { 
        logError("Note not found!!!")
    } else {
        const authentication = authenticationObject.body
        return authentication
    }
}

module.exports = {
    GetAuthentication: GetAuthentication
}