'use strict'

function greetAdmin(adminUserName) {
    document.querySelector(".greet-admin").innerText =
        'Hello ' + adminUserName + ', welcome to your Safe Content\nADMIN PAGE'
}

function renderUsersList() {
    var users = loadUsersFromStorage()
    users.sort(getSortFunc(gSortByField))

    var usersHtml =
        `\n<tbody>\n`                      +
        `\t<tr>\n`                         +
        `\t\t<th>User Name</th>\n`         +
        `\t\t<th>Password</th>\n`          +
        `\t\t<th>Registration Date</th>\n` +
        `\t\t<th>Admin</th>\n`             +
        `\t\t<th>Last Login</th>\n`        +
        `\t</tr>\n`

    users.forEach(function (user) {
        usersHtml +=
            `\t<tr>\n`                                +
            `\t\t<td>${user.userName}</td>\n`         +
            `\t\t<td>${user.password}</td>\n`         +
            `\t\t<td>${user.registrationDate}</td>\n` +
            `\t\t<td>${user.admin}</td>\n`            +
            `\t\t<td>${user.lastLogin}</td>\n`        +
            `\t</tr>\n`
    })
    usersHtml += `\n</tbody>\n`
    document.body.querySelector('.users-table').innerHTML = usersHtml
}