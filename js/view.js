'use strict'

function ellipsizePostsParagraphs() {
    var elsPostParagraphs = document.querySelectorAll('.post-paragraph')
    for (var elPostParagraph of elsPostParagraphs) {
        ellipsizeTextBox(elPostParagraph)
    }
}

function ellipsizeTextBox(elPostParagraph) {
    var words = elPostParagraph.innerText.split(' ');
    while(elPostParagraph.scrollHeight > elPostParagraph.offsetHeight) {
        words.pop();
        elPostParagraph.innerText = words.join(' ') + '...';
    }
}

function removeContReadingButtonsIfRedundant() {
    var elsPostTextsContainers = document.querySelectorAll('.post-texts-container')
    for (var elPostTextsContainer of elsPostTextsContainers) {
        var elPostParagraph = elPostTextsContainer.querySelector('.post-paragraph')
        if (elPostParagraph.scrollHeight <= elPostParagraph.offsetHeight) {
            elPostTextsContainer.querySelector('.cont-reading-button').style.display = 'none'
        }
    }
}
