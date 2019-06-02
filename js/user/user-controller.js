'use strict'

function onInit() {
    var loggedUser = loadLoggedUserFromStorage()
    if (!loggedUser) {
        moveToPage(ADDRESS_LOGIN)
    } else {
        greetUser(loggedUser.userName)
        if (loggedUser.admin) {
            showAdminBtn()
        }
    }
}

function adminClicked() {
    moveToPage(ADDRESS_ADMIN)
}
