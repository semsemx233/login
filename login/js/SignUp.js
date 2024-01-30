var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signupBtn = document.getElementById('signupBtn');
var errorMessage = document.getElementById('errorMessage');
var succesMessage = document.getElementById('succesMessage');

var usersList = [];

if(localStorage.getItem('users') != null){

    usersList = JSON.parse(localStorage.getItem('users'));

}

function signUp(){

    isEmpty()

    if (isEmpty() != true) {

        var newUser = {
            Name: signupName.value,
            Email: signupEmail.value,
            Password: signupPassword.value
        }
        
        usersList.push(newUser);
        
        localStorage.setItem("users", JSON.stringify(usersList));
    
        console.log('New User Was Added!');

        succesMessage.classList.remove('d-none')

        window.location = '/index.html'

    }
}


function isEmpty(){
    if (signupName.value == '' || signupEmail.value == '' || signupPassword.value == '') {

        errorMessage.innerText = ('All inputs is required')
        errorMessage.classList.remove('d-none')

        return true
    } else {
        errorMessage.classList.add('d-none')
        return false
    }
}

function checkEmail(){
    for (var i = 0; i < usersList.length; i++) {

        if (signupEmail.value == usersList[i].Email) {
            console.log('yes its found!');

            errorMessage.innerText = ('This email is already registered')
            errorMessage.classList.remove('d-none')

            signupBtn.setAttribute("disabled", "");
            return
        }else{
            errorMessage.classList.add('d-none')
            signupBtn.removeAttribute('disabled')
        }
    }
}