
const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur' , inputValidHandler)

function inputValidHandler(event){
    if(event.currentTarget.value.length === Number(inputEl.getAttribute('data-length'))){
        inputEl.classList.add('.valid')
        if(inputEl.classList.contains('.invalid')){
            inputEl.classList.remove('.invalid')
        }else{
            inputEl.classList.add('.invalid');
            if(inputEl.classList.contains('.valid')){
                inputEl.classList.remove('.valid');
            }
        }
    }
  
}





