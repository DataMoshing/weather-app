const span = document.getElementById("span");

function time() {
    span.textContent = new Date().toLocaleTimeString();
};

setInterval(time, 1000);
window.onload = time;

export default time