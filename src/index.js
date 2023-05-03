import "./style.css";
import { btn, getApi } from "./weather"
import { display, weatherMain, locationDiv } from "./dom"
import time from "./time";

btn.addEventListener("click", (e) => {
    e.preventDefault()
    getApi().then((display))
    weatherMain.textContent = ""
    locationDiv.textContent = ""
})

time()