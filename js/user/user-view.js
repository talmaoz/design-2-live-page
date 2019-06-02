'use strict'

function greetUser(userName) {
    document.querySelector(".greet-user").innerText =
        'Hello ' + userName + ', welcome to your Safe Content'
}

function showAdminBtn() {
    document.querySelector('.adminBtn').style.display = 'block'
}

