'use strict'

var gQuotes = createQuotes()

function loadUsersFromStorage() {
    return JSON.parse(localStorage.getItem(KEY_SAFE_CONTENT_USERS))
}

function loadLoggedUserFromStorage() {
    return JSON.parse(localStorage.getItem(KEY_SAFE_CONTENT_LOGGED_USER))
}

function logout() {
    localStorage.removeItem(KEY_SAFE_CONTENT_LOGGED_USER)
}

function createQuotes() {
    var quotesInteractions = [
        1, 1, 1, 1, 1, 1, 1, // 7qs
        3, 3, 3, 3,          // 4qs
        4, 4, 4,             // 3qs
        7, 7,                // 2qs
        20,                  // 1qs
        30,                  // 1qs
        100,                 // 1qs
        300                  // 1qs
                             // 20qs tot
    ]
    // var quotesInteractions = [
    //     30,
    //     1, 1, 1, 1, 1, 1,
    //     20,
    //     3, 3, 3, 3,
    //     4, 4, 4,
    //     7, 7,
    //     1,
    //     100,
    //     300
    // ]
    // var quotesInteractions = [
    //     100, 100, 100, 100
    // ]
    var quotes = []
    for (var i=0; i<quotesInteractions.length; i++) {
        quotes.push(generateQuote(i, 'BLA'.repeat(i+1), quotesInteractions[i]))
    }
    return quotes
}

function getQuotesDisplayWeights(quotes) {

    var totalQuotesInteractions = 0
    quotes.forEach(function(quote) {
        totalQuotesInteractions += quote.interactions
    })

    return quotes.map(function (quote) {
        return (quote.interactions / totalQuotesInteractions).toFixed(8)
    })
}

function generateQuote(quoteId, quoteTxt, quoteInteractions) {
    return {
        id  : quoteId,
        quote : quoteTxt,
        interactions : quoteInteractions
    }
}
