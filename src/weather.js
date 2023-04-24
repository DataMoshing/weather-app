const URL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=02dbfb3b0a9eca931937cb67ff5eba51"

const response = await fetch(URL, { mode: "cors" })
const getData = await response.json()

export default getData