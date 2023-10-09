const switchInput = document.querySelector("#myToggler");

switchInput.addEventListener("change", function () {
  const body = document.querySelector("body");

  if (this.checked) {
    body.style.setProperty("--dot-bg", "black");
    body.style.setProperty("--dot-color", "white");
    body.style.transition = ".5s";
  } else {
    body.style.setProperty("--dot-bg", "white");
    body.style.setProperty("--dot-color", "black");
    body.style.transition = ".5s";
  }
});
