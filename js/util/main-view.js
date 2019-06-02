'use strict'

function renderQuotes(quotes, quotesDisplayWeights) {
    var quotesHtml = ''
    for (var i=0; i<quotes.length; i++) {
        quotesHtml +=
            '\n\t' + `<div class="planet-wrapper">\n` +
            '\t\t' + `<div class="planet" title="${quotes[i].quote}"></div>\n` +
            `\t</div>`
    }
    quotesHtml += '\n'
    var elPlanetsWrapper = document.body.querySelector('.planets-wrapper')
    elPlanetsWrapper.innerHTML = quotesHtml

    var planetsWrapperHeight = elPlanetsWrapper.offsetHeight
    var elsPlanetsWrappers = document.body.querySelectorAll('.planet-wrapper')
    for(i=0; i<elsPlanetsWrappers.length; i++) {
        var elPlanetWrapper = elsPlanetsWrappers[i]
        var planetWrapperHeight = planetsWrapperHeight
                                * quotesDisplayWeights[i]
                                * (NUM_MAX_PLANET_WRAPPER_RATIO)

        elPlanetWrapper.style.height  = planetWrapperHeight + 'px'
        elPlanetWrapper.style.width   = planetWrapperHeight + 'px'
        elPlanetWrapper.style.padding = planetWrapperHeight * (NUM_PLANET_WRAPPER_PADDING_RATIO / 2) + 'px'

        // var elPlanet = elPlanetWrapper.querySelector('.planet')
        // elPlanet.style.margin = (NUM_PLANET_WRAPPER_PADDING_RATIO / 2) + '%'
        // elPlanet.style.height = (NUM_PLANET_RATIO) + '%'
        // elPlanet.style.width  = elPlanet.clientHeight + 'px'
    }
}



