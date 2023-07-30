const nameInput = document.getElementById("name-input");
const nameSpan = document.getElementById("name-output");

nameInput.addEventListener('input', () => {
const inputText = nameInput.value;
nameSpan.textContent = inputText ? inputText : 'Anonymous';
});


console.dir(nameInput);
console.dir(nameSpan);



