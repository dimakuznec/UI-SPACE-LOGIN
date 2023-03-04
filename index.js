// Получаем ссылку на элемент формы с e-mail адресом
const emailInput = document.getElementById('email-input');

// Очищаем текст внутри поля e-mail при нажатии на кнопку "Очистить"
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
  emailInput.value = ''; // устанавливаем значение свойства "value" в пустую строку
});
//Прасмотер пароля
let buttonViewing = document.querySelector('.viewing'),
inputPassword = document.querySelector('.input-password');

buttonViewing.onclick = function () {
  if(inputPassword.getAttribute('type') === 'password') {
    inputPassword.setAttribute('type', 'text');
    buttonViewing.classList.add('active');
  } else {
    inputPassword.setAttribute('type', 'password');
  }
}