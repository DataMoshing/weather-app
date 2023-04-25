import "./style.css";
import { getApi, btn } from "./weather"

btn.addEventListener("click", (e) => {
    e.preventDefault()
    getApi()
})