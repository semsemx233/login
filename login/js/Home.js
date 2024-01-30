var onlineUserName = localStorage.getItem('online')

var userName = document.getElementById('userName');

userName.innerText = onlineUserName;

var logOutBtn = document.getElementById('logOutBtn');

if(localStorage.getItem('online') == null){

    window.location = '/index.html';

}


function logOut(){
    localStorage.removeItem('online');
    window.location = '/index.html';
}