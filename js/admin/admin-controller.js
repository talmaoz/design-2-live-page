'use strict'

function onInit() {
    var loggedUser = loadLoggedUserFromStorage()
    if (!loggedUser) {
        moveToPage(ADDRESS_LOGIN)
    } else if (!loggedUser.admin) {
        moveToPage(ADDRESS_USER)
    } else {
        greetAdmin(loggedUser.userName)
        renderUsersList()
    }
}

function userBtnClicked () {
    moveToPage(ADDRESS_USER)
}

function onSetSort(sortByTxt) {
    setSortByField(sortByTxt);
    renderUsersList();
}
