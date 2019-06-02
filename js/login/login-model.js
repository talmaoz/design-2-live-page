'use strict'

function loginUser(userName, password) {
    var users = loadUsersFromStorage()
    var userIdx =  users.findIndex(function (user) {
        return user.userName === userName && user.password === password
    })

    var user = null
    if (userIdx !== -1) {
        user = users[userIdx]
        user.lastLogin = new Date()
        saveUsersToStorage(users)
    }
    return user
}

function saveUsersToStorage(users) {
    var strValue = JSON.stringify(users);
    localStorage.setItem(KEY_SAFE_CONTENT_USERS, strValue);
}

function saveLoggedUserToStorage(user) {
    var strValue = JSON.stringify(user);
    localStorage.setItem(KEY_SAFE_CONTENT_LOGGED_USER, strValue);
}

function createUsers() {
    var users = loadUsersFromStorage()
    if (!users || !users.length) {
        addNewUser('Moshe', '1234', false)
        addNewUser('Koby', '1234', false)
        addNewUser('Talma', '4321', true)
    }
}

function addNewUser(newUserName, password, admin=false) {
    var users = loadUsersFromStorage(KEY_SAFE_CONTENT_USERS)
    if (users) {
        var userAlreadyExists = users.findIndex(function (user) {
            return user.userName === newUserName
        })
        if (userAlreadyExists !== -1 ) return null
    } else {
        users = []
    }

    var user = {
        userName: newUserName,
        password: password,
        registrationDate: new Date(),
        admin: admin,
        lastLogin: new Date()
    }
    users.push(user)
    saveUsersToStorage(users)
    return user
}


