const formEl = document.querySelector ('.login-form');


formEl.addEventListener('submit', formElSubmitHendler)

function formElSubmitHendler(evt){
    evt.preventDefault();
    
    const {
        elements : {email , password}
    } = evt.currentTarget;

    if (email.value === '' || password.value === ''){
        alert ("Please fill in all the fields!");
        return  evt.currentTarget.reset();
    }
      
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    
    evt.currentTarget.reset();
   
    
}


