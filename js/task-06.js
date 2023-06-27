const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const length = inputEl.getAttribute("data-length");
  const value = inputEl.value.trim().length;

  function toggleClass(remove, add) {
    inputEl.classList.remove(remove);
    inputEl.classList.add(add);
  }

  if (value === Number(length)) {
    toggleClass("invalid", "valid");
  } else {
    toggleClass("valid", "invalid");
  }
});
