function display(getData) {
    console.log(getData)
    const mainWrap = document.createElement("div")
    const weatherMain = document.createElement("div")
    const locationDiv = document.createElement("div")
    const descriptionDiv = document.createElement("div")
    const temperature = document.createElement("p")
    const feelsLike = document.createElement("p")
    const humidity = document.createElement("p")
    const highTemp = document.createElement("p")
    const lowTemp = document.createElement("p")

    mainWrap.className = "main-wrap"
    weatherMain.className = "weather-main"
    locationDiv.className = "location"
    descriptionDiv.className = "description"
    temperature.className = "temperature"
    feelsLike.className = "feels-like"
    humidity.className = "humidity"
    highTemp.className = "high"
    lowTemp.className = "low"


    const location = [getData.sys.country, getData.name]
    const temp = `Temperature: ${getData.main.temp} °F`
    const feelsLikeTemp = `Feels like: ${getData.main.feels_like} °F`
    const humidityTemp = `Humidity: ${getData.main.humidity}%`
    const high = `High: ${getData.main.temp_max} °F`
    const low = `Low: ${getData.main.temp_min} °F`
    const description = [getData.weather[0].description]
    const mainStr = [location, temp, feelsLikeTemp, humidityTemp, high, low, description]

    const serializedObj = JSON.stringify(mainStr, null, " ")

    locationDiv.append(location)
    temperature.append(temp)
    feelsLike.append(feelsLikeTemp)
    humidity.append(humidityTemp)
    highTemp.append(high)
    lowTemp.append(low)
    descriptionDiv.append(description)
    mainWrap.append(weatherMain)
    weatherMain.append(locationDiv, temperature, feelsLike, humidity, highTemp, lowTemp, descriptionDiv)
    document.body.append(mainWrap)
    return serializedObj
}

export default display