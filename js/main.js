var emailInput = document.querySelector('#emailInput')
var passwordInput = document.querySelector('#passwordInput')
var errorMessage = document.querySelector('#errorMessage')

var usersList = [];

if(localStorage.getItem('users') != null){

    usersList = JSON.parse(localStorage.getItem('users'));

}

if(localStorage.getItem('online') != null){

    window.location = '/home.html';


}


function isEmpty(){
    if (emailInput.value == '' || passwordInput.value == '') {

        errorMessage.innerText = ('All inputs is required')
        errorMessage.classList.remove('d-none')

        return true
    } else {
        errorMessage.classList.add('d-none')
        return false
    }
}

function logIn(){
    isEmpty()

    if (isEmpty() != true) {
        checkEmail()
    }
}


function checkEmail(){
    for (var i = 0; i < usersList.length; i++) {

        if (emailInput.value == usersList[i].Email && passwordInput.value == usersList[i].Password) {

            window.location = '/home.html'
            succesMessage.classList.remove('d-none')

            localStorage.setItem("online", JSON.stringify(usersList[i].Name));

            return
        } else if (emailInput.value == usersList[i].Email && passwordInput.value != usersList[i].Password){
            
            errorMessage.innerText = ('Incorrect password')
            errorMessage.classList.remove('d-none')

        } else if (emailInput.value != usersList[i].Email){
            errorMessage.innerText = ('Wrong email')
            errorMessage.classList.remove('d-none')
        }
    }
}