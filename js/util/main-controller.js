'use strict'

function moveToPage(address) {
    window.location = address
}

function logoutClicked() {
    logout()
    moveToPage(ADDRESS_LOGIN)
}

function quotesMapClicked() {
    renderQuotes(gQuotes, getQuotesDisplayWeights(gQuotes))
}