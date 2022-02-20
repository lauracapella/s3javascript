//var submit = document.getElementById('submit');
// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var namePrimer = document.querySelector('.name_p');
var nameSegundo = document.querySelector('.name_s');
var nameAdress = document.querySelector('.name_a');
var email = document.querySelector('.email');

// Get the error elements
var errorPass = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorNameSegundo = document.getElementById('errorNameSeg');
var errorNameAdress = document.getElementById('errorNameAdr');  
var errorEmail = document.getElementById('errorEmail');  
var errorPhone = document.getElementById('errorPhone');  

var expRegName = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; // Letras y espacios, pueden llevar acentos.
var expRegPhone = /^\d{7,25}$/; // 7 a 14 numeros.
var expRegEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var expRegPass = /^.{3,12}$/; // 4 a 12 digitos.

const element = document.querySelector('form');
element.addEventListener('submit', event => {
  event.preventDefault();
  validate();
});

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    if( (namePrimer.value == "") || (namePrimer.value.lenght < 3) || !expRegName.test(namePrimer.value)){
        namePrimer.style.border = "1px solid red";
        namePrimer.style.backgroundColor = "#FFCCCC";
        namePrimer.style.color = "red";
        errorName.innerHTML = 'Indique nombre sin números y con más de 2 carácteres';
        errorName.style.display = 'block';
        errorName.style.color = 'red';
        namePrimer.focus();
        return false;
    }else{
        namePrimer.style.border = "1px solid green";
        namePrimer.style.backgroundColor = "#ffffff";
        namePrimer.style.color = "green";
        //errorName.innerHTML = 'Indique nombre sin números y con más de 2 carácteres';
        errorName.style.display = 'none';
        errorName.style.color = 'green';
    }
    if( nameSegundo.value == "" || (nameSegundo.value.lenght < 3) || !expRegName.test(nameSegundo.value)){
        nameSegundo.style.border = "1px solid red";
        nameSegundo.style.backgroundColor = "#FFCCCC";
        nameSegundo.style.color = "red";
        errorNameSegundo.innerHTML = 'Indique apellido sin números y con más de 2 carácteres';
        errorNameSegundo.style.display = 'block';
        errorNameSegundo.style.color = 'red';
        nameSegundo.focus();
        return false;
    }else{
        nameSegundo.style.border = "1px solid green";
        nameSegundo.style.backgroundColor = "#ffffff";
        nameSegundo.style.color = "green";
        //errorName.innerHTML = 'Indique nombre sin números y con más de 2 carácteres';
        errorNameSegundo.style.display = 'none';
        errorNameSegundo.style.color = 'green';
    }
    if( email.value == "" || (email.value.lenght < 3) || !expRegEmail.test(email.value)){
        email.style.border = "1px solid red";
        email.style.backgroundColor = "#FFCCCC";
        email.style.color = "red";
        errorEmail.style.display = 'block';
        errorEmail.style.color = 'red';
        email.focus();
        return false;
    }else{
        email.style.border = "1px solid green";
        email.style.backgroundColor = "#ffffff";
        email.style.color = "green";
        //errorName.innerHTML = 'Indique nombre sin números y con más de 2 carácteres';
        errorEmail.style.display = 'none';
        errorEmail.style.color = 'green';
    }
    if( nameAdress.value == "" || (nameAdress.value.lenght < 3)){
        nameAdress.style.border = "1px solid red";
        nameAdress.style.backgroundColor = "#FFCCCC";
        nameAdress.style.color = "red";
        errorNameAdress.style.display = 'block';
        errorNameAdress.style.color = 'red';
        nameAdress.focus();
        return false;
    }else{
        nameAdress.style.border = "1px solid green";
        nameAdress.style.backgroundColor = "#ffffff";
        nameAdress.style.color = "green";
        //errorName.innerHTML = 'Indique nombre sin números y con más de 2 carácteres';
        errorNameAdress.style.display = 'none';
        errorNameAdress.style.color = 'green';
    }
    if( password.value == "" || (password.value.lenght < 3) || !expRegPass.test(password.value)){
        password.style.border = "1px solid red";
        password.style.backgroundColor = "#FFCCCC";
        password.style.color = "red";
        errorPass.style.display = 'block';
        errorPass.style.color = 'red';
        password.focus();
        return false;
    }else{
        password.style.border = "1px solid green";
        password.style.backgroundColor = "#ffffff";
        password.style.color = "green";
        //errorName.innerHTML = 'Indique nombre sin números y con más de 2 carácteres';
        errorPass.style.display = 'none';
        errorPass.style.color = 'green';
    }
    if( phone.value == ""  || (phone.value.lenght < 3) || !expRegPhone.test(phone.value)){
        phone.style.border = "1px solid red";
        phone.style.backgroundColor = "#FFCCCC";
        phone.style.color = "red";
        errorPhone.style.display = 'block';
        errorPhone.style.color = 'red';
        phone.focus();
        return false;
    }else{
        phone.style.border = "1px solid green";
        phone.style.backgroundColor = "#ffffff";
        phone.style.color = "green";
        //errorName.innerHTML = 'Indique nombre sin números y con más de 2 carácteres';
        errorPhone.style.display = 'none';
        errorPhone.style.color = 'green';
    }
}



