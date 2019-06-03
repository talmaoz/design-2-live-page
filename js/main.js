'use strict'

function onInit() {

    // Remove "Continue Reading" button from posts that the paragraph fits inside its container :
    removeContReadingButtonsIfRedundant()

    // multiline replace overflowing text with "..." :
    ellipsizePostsParagraphs()

}

