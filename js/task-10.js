function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputContainet = document.querySelector("#controls");
const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const boxContainerEl = document.querySelector("#boxes");

btnDestroyEl.addEventListener("click", () => {
  boxContainerEl.innerHTML = "";
  inputEl.value = "";
});

function createBoxes() {
  const amount = inputEl.value;

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    boxContainerEl.appendChild(newDiv);
  }
}

btnCreateEl.addEventListener("click", createBoxes);