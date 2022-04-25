const formReg = document.querySelector('.login-form');
const onFormSubmit = (evt) => {
  evt.preventDefault();
  const {
    elements: {
      email: { value: email },
      password: { value: password },
    },

  } = evt.currentTarget;
  !email || !password ? alert('Заповніть усі поля') : console.log({ email: email,password: password });
  
};
formReg.addEventListener('submit', onFormSubmit);
formReg.reset();