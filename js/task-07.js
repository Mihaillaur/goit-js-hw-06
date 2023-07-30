const inputRange = document.getElementById("font-size-control");
const spanText = document.getElementById("text");

inputRange.addEventListener("input", function(){
    spanText.style.fontSize = inputRange.value + "px"
});
console.dir(inputRange);
console.dir(spanText);