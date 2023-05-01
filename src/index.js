import "./style.css";
import { btn, getApi } from "./weather"
import display from "./dom"

btn.addEventListener("click", (e) => {
    e.preventDefault()
    getApi().then((display))
})