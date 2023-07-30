const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const spanColor = document.querySelector(".color");

button.addEventListener("click", replaceBackgroundColor);

function replaceBackgroundColor(event){
  let backgCol = getRandomHexColor();
  body.style.backgroundColor = backgCol;
  spanColor.textContent = backgCol;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    
};
