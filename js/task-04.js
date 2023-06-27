const valueEl = document.querySelector("#value");
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

let currentValue = 0;

decrementBtnEl.addEventListener("click", () => {
    currentValue -= 1;
    valueEl.textContent = currentValue
});

incrementBtnEl.addEventListener("click", () => {
    currentValue += 1;
    valueEl.textContent = currentValue
})