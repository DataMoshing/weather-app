// import { getApi } from "./weather";

function display(getData) {
    const mainStr = [getData.sys.country, getData.name, getData.main, getData.weather[0].description]

    let serializedObj = JSON.stringify(mainStr, null, " ")
    serializedObj = serializedObj.replace(/["']/g, "").replace(/[{}]/g, "").replace(/[[\]]/g, "")

    document.body.append(serializedObj)
}

export default display