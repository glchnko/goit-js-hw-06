const counterValue = 0;

const displayValue = document.querySelector('#value');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

decrementEl.addEventListener('click', decrementElClickHandler);
incrementEl.addEventListener('click', incrementElClickHandler);

function decrementElClickHandler(evt){
    evt.target -= 1;
    displayValue.textContent = counterValue;
}

function incrementElClickHandler(evt){
    evt.target += 1;
    
    console.log(incrementEl);
    console.log(counterValue);
}    