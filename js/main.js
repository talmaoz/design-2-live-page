'use strict'

function onInit() {
    var elsPostParagraphs = document.querySelectorAll('.post-paragraph')
    for (var elPostParagraph of elsPostParagraphs) {
        console.log(elPostParagraph)
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
