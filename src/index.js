import "./style.css";
import { getApi, btn } from "./weather"
import { } from "./dom"

btn.addEventListener("click", (e) => {
    e.preventDefault()
    getApi()
})