const span = document.getElementById("span");

function displayClock() {
    const display = new Date().toLocaleTimeString();
    setTimeout(displayClock, 1000);
    span.textContent = display
    return display
}
window.onload = displayClock();

export default displayClock