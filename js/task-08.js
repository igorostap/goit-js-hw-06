const formReg = document.querySelector('.login-form');
const formPassword = document.querySelector('[type="password"]');
const formMail = document.querySelector('[type="email"]');

formReg.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const dataUser = {
        email,
        password,
    };
    formPassword.className = 'field';
    formMail.className = 'field';
    const fields = formReg.querySelectorAll('.field');

    const errors = formReg.querySelectorAll('.error');

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
        console.log('поле не заповнено', fields[i]);
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.innerHTML = 'Заповніть поле';
        formReg[i].parentElement.insertBefore(error, fields[i]);
    }
  }
    
    //let text = '';
   
    //if (event.currentTarget.elements.password.value == "") {
        
     //    text = formPassword.insertAdjacentHTML("afterend", "<p class=text>Заповніть усі поля</p>");
        
    //}
    //if (event.currentTarget.elements.email.value == "") {
        
    //     text = formMail.insertAdjacentHTML("afterend", "<p class=text>Заповніть усі поля</p>");
     //   return dataUser.email = 'fff';
   // }
     //const deleteError = document.querySelector('.text');
   // deleteError.remove();
   // event.currentTarget.elements.password.value = '';
   // event.currentTarget.elements.email.value = '';

}

