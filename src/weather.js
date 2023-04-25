const btn = document.getElementById("generate")

async function getApi() {
    try {
        let URL = "http://api.openweathermap.org/geo/1.0/direct?&limit=5&appid=02dbfb3b0a9eca931937cb67ff5eba51&units=imperial&q="
        const input = document.getElementById("search").value.trim()
        URL = URL.concat(input)
        const response = await fetch(URL, { mode: "cors" })
        const getData = await response.json()
        console.log(getData)
        return getData
    } catch (error) {
        console.log(error)
        return undefined
    }
}

export { getApi, btn }

