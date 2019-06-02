'use strict'

var gSortByField = KEY_USER_NAME

function getSortFunc(sortByField) {
    return function (user1, user2) {
        var reverse = 1
        if (sortByField === KEY_LAST_LOGIN   ||
            sortByField === KEY_REGISTRATION ||
            sortByField === KEY_ADMIN
        ) {
            reverse = -1
        }
        if (user1[sortByField] >   user2[sortByField]) return  reverse
        if (user1[sortByField] === user2[sortByField]) return  0
        if (user1[sortByField] <   user2[sortByField]) return -reverse
    }
}

function setSortByField(sortByTxt) {
    if (sortByTxt === 'User name'        ) gSortByField = KEY_USER_NAME
    if (sortByTxt === 'Password'         ) gSortByField = KEY_PASSWORD
    if (sortByTxt === 'Registration Date') gSortByField = KEY_REGISTRATION
    if (sortByTxt === 'Admin'            ) gSortByField = KEY_ADMIN
    if (sortByTxt === 'Last login'       ) gSortByField = KEY_LAST_LOGIN
}

