const btn = document.getElementById("generate")

async function getApi() {
    try {
        let URL = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&appid=02dbfb3b0a9eca931937cb67ff5eba51&q="

        const input = document.getElementById("search").value.trim()
        URL = URL.concat(input)

        const response = await fetch(URL, { mode: "cors" })
        const getData = await response.json()

        if (getData.sys === undefined) {
            return alert("404 (Not Found) - Please enter a valid location.")
        }
        return getData
    } catch (error) {
        return undefined
    }
}

export { getApi, btn }