const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('input' ,  onSizeChanger );

function onSizeChanger(event){
   textEl.style.fontSize = `${event.target.value}px`;
}