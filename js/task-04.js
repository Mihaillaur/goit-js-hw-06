let counterValue = 0;
const minusVal = document.querySelector('[data-action="decrement"]');
const plusVal = document.querySelector('[data-action="increment"]');
const spanValue = document.getElementById('value');

minusVal.addEventListener('click', () => {
    counterValue -= 1;
    spanValue.textContent = counterValue;

});

plusVal.addEventListener('click', () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
});