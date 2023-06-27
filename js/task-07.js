const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

input.addEventListener("input", substitute);

function substitute(chn) {
    text.style.fontSize = `${chn.currentTarget.value}px`;
}