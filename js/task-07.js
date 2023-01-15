const slider = document.querySelector("#font-size-control");

const rangingText = document.querySelector("#text");

slider.addEventListener('input', (event) => {
    const value = event.currentTarget.value
rangingText.style.fontSize = value + "px"
});