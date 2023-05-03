const btn = document.getElementById("generate")

async function getApi() {
    try {
        let URL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=02dbfb3b0a9eca931937cb67ff5eba51&q="

        const input = document.getElementById("search").value.trim()
        URL = URL.concat(input)

        const response = await fetch(URL, { mode: "cors" })
        const getData = await response.json()
        return getData
    } catch (error) {
        console.log(error)
        alert("Location not found, please try again.")
        return undefined
    }
}

export { getApi, btn }