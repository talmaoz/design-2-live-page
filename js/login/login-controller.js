'use strict'

function onInit() {
    createUsers()
    var loggedUser = loadLoggedUserFromStorage()
    if (loggedUser) {
        moveToPage(ADDRESS_USER)
    } else {
        msgUser(MSG_LOGIN_OR_REGISTER)
    }
}

function onLoginClicked() {
    var userName = document.querySelector(".user").value
    var password = document.querySelector(".password").value
    if (!userName || !password) return
    var user = loginUser(userName, password)
    if (user) {
        saveLoggedUserToStorage(user)
        moveToPage(ADDRESS_USER)
    } else {
        msgUser(MSG_WRONG_USER_OR_PASSWORD)
    }
}

function onRegisterClicked() {
    var userName = document.querySelector(".user").value
    var password = document.querySelector(".password").value
    if (!userName || !password) return

    var user = addNewUser(userName, password)
    if (user) {
        saveLoggedUserToStorage(user)
        moveToPage(ADDRESS_USER)
    } else {
        msgUser(MSG_USER_ALREADY_EXISTS)
    }
}
