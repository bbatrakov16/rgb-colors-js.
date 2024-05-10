// Valiables
var paragraphRGB = document.getElementById("pRGB");
var btnPreview = document.getElementById("btn-prev");
var display = document.getElementById("display");
var btnBlack = document.getElementById("btn-black");
var btnWhite = document.getElementById("btn-white");

btnPreview.addEventListener("click", bacgrChange);

function bacgrChange() {
  let r = +document.getElementById("red").value;
  let g = +document.getElementById("green").value;
  let b = +document.getElementById("blue").value;

  display.style.background = `rgb(${r}, ${g}, ${b})`;
  paragraphRGB.innerHTML = `rgb(${r}, ${g}, ${b})`;
}

btnBlack.addEventListener("click", ShowBlackDisplay);

function ShowBlackDisplay() {
  display.style.background = `rgb(0, 0, 0)`;
  paragraphRGB.innerHTML = `rgb(0, 0, 0)`;
}

btnWhite.addEventListener("click", ShowWhiteDisplay);

function ShowWhiteDisplay() {
  display.style.background = `rgb(255, 255, 255)`;
  paragraphRGB.innerHTML = `rgb(255, 255, 255)`;
}

btnPreview.addEventListener("click", changeSize);

function changeSize() {
  let inpWidth = +document.getElementById("inp-width").value;
  let inpHeight = +document.getElementById("inp-height").value;

  if (inpWidth < 50 && inpHeight < 50) {
    display.style.width = `50px`;
    display.style.height = `50px`;
  } else if (inpWidth > 400 && inpHeight > 200) {
    display.style.width = `400px`;
    display.style.height = `200px`;
  } else if (
    inpWidth >= 50 &&
    inpWidth <= 400 &&
    inpHeight >= 50 &&
    inpHeight <= 200
  ) {
    display.style.width = `${inpWidth}px`;
    display.style.height = `${inpHeight}px`;
  } else if (inpWidth < 50 && inpHeight >= 50 && inpHeight <= 200) {
    display.style.width = `50px`;
    display.style.height = `${inpHeight}px`;
  } else if (inpWidth > 400 && inpHeight >= 50 && inpHeight <= 200) {
    display.style.width = `400px`;
    display.style.height = `${inpHeight}px`;
  } else if (inpWidth >= 50 && inpWidth <= 400 && inpHeight < 50) {
    display.style.width = `${inpWidth}px`;
    display.style.height = `50px`;
  } else if (inpWidth >= 50 && inpWidth <= 400 && inpHeight > 200) {
    display.style.width = `${inpWidth}px`;
    display.style.height = `200px`;
  } else if (inpWidth < 50 && inpHeight > 200) {
    display.style.width = `50px`;
    display.style.height = `200px`;
  } else if (inpWidth > 400 && inpHeight < 50) {
    display.style.width = `400px`;
    display.style.height = `50px`;
  }
}
