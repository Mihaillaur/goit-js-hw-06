const inputText = document.getElementById("validation-input");
const inputLength =  Number(inputText.dataset.length);

inputText.addEventListener("blur", () => {
if (inputText.value.trim().length === inputLength){
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
} else{
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
}
});


console.dir(inputLength);