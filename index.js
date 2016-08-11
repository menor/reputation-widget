// Adjust position of positive based on rating (edge cases <10% and 100%)
// get facility-id from params
// change the color palette from a param
// call the api for the feedback rating
// contain globals into an object
// Accesibility https://www.sitepoint.com/tips-accessible-svg/
// 'package' the code

// globals (put this in an object)

// gets the OS language
// we need to check if we are getting the lang as a parameter
var lang = navigator.language || navigator.userLanguage
lang = lang.substring(0,2)

var palettes = {
  darkBlue: {
    medium: '#3E4862',
    dark: '#333B4F',
    darker: '#293140'
  },
  lightBlue: {
    medium: '#00A7C4',
    dark: '#018EA6',
    darker: '#047D92'
  },
  yellow: {
    medium: '#F8C150',
    dark: '#D7A43B',
    darker: '#B0842B'
  }
}

var feedbackScore = '90'

var translations = {
  de: {
    headline: {
      text: 'ZUFRIEDENHEIT',
      x: '47'
    },
    subline: {
      text: 'UNSERER GÄSTEN',
      x: '37.247'
    },
    positive: {
      text: 'POSITIV',
    }
  },
  du: {
    headline: {
      text: 'TEVREDENHEID',
      x: '47'
    },
    subline: {
      text: 'VAN ONZE GASTEN',
      x: '37.247'
    },
    positive: {
      text: 'POSITIV',
    }
  },
  en: {
    headline: {
      text: 'SATISFACTION OF',
      x: '47'
    },
    subline: {
      text: 'OUR GUESTS',
      x: '61.247'
    },
    positive: {
      text: 'POSITIVE',
    },
  },
  es: {
    headline: {
      text: 'SATISFACCION DE',
      x: '47'
    },
    subline: {
      text: 'NUESTROS CLIENTES',
      x: '37.247'
    },
    positive: {
      text: 'POSITIVA',
    },
  },
  fr: {
    headline: {
      text: 'SATISFACTION DE',
      x: '47'
    },
    subline: {
      text: 'NOS CLIENTS',
      x: '37.247'
    },
    positive: {
      text: 'POSITIF',
    },
  },
  pt: {
    headline: {
      text: 'SATISFAÇÃO DOS',
      x: '47'
    },
    subline: {
      text: 'NOSSOS CLIENTES',
      x: '37.247'
    },
    positive: {
      text: 'POSITIVA',
    },
  }
}

// If we don't have a translation for the user language we default to english
var texts = translations[lang] || translations['en']

// Next 2 values should be passed as params
var facilityId = 'the-fish'
var palette = palettes.yellow

// We calculate the X position of the percentage text here
// Based on the length of the 2 strings
var feedbackScoreLength = texts.positive.text.length + feedbackScore.length
var feedbackScoreX

switch (feedbackScoreLength) {
  case 8:
    feedbackScoreX = '44'
    break
  case 9:
    feedbackScoreX = '37'
    break
  case 10:
    feedbackScoreX = '30'
    break
  default:
    feedbackScoreX = '22'
    break
}

// Initialize function
// http://dustindiaz.com/smallest-domready-ever
function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

function replaceElement() {
  var el = document.getElementById('resmio-badge')
  el.innerHTML = (
    '<svg width="201" height="229" viewBox="0 0 201 229" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
      '<style>'  +
        '@font-face {'+
          'font-family: "resmioOpenSans";' +
          'src: url(data:application/font-woff;charset=utf-8;base64,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) format("woff");' +
        '}' +
      '</style>' +
      '<defs>' +
        '<rect id="a" x="14.543" y="124.148" width="172.751" height="40.153" rx="2"/>' +
        '<filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="b">' +
          '<feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>' +
          '<feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>' +
          '<feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>' +
          '<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.149230072 0" in="shadowBlurOuter1"/>' +
        '</filter>' +
        '<mask id="c" x="0" y="0" width="172.751" height="40.153" fill="#fff">' +
          '<use xlink:href="#a"/>' +
        '</mask>' +
      '</defs>' +
        '<path id="scroll-torn" fill="' + palette.dark + '"d="M145.566 170.98l41.51-7.328H151.34m-93.217 7.432l-41.408-7.323 37.614.49"/>' +
        '<path id="badge-back"  stroke="' + palette.dark + '" fill="' + palette.medium + '" d="M35.67 147.343C4.313 98.235 11.697 61.825 11.697 61.825l89.878-50.655 88.562 49.668s7.383 36.41-23.976 85.518c-31.35 49.108-65.14 70.45-65.14 70.45s-33.99-20.356-65.35-69.463z"/>' +
        '<path id="badge-fill"  stroke="' + palette.dark + '" fill="#FFF" d="M43.537 142.9c-27.977-43.786-21.39-76.25-21.39-76.25l80.186-45.168 79.01 44.288s6.588 32.465-21.39 76.253c-27.976 43.79-58.948 62.81-58.948 62.81s-29.49-18.14-57.468-61.93z"/>' +
        '<path id="legend-back" fill="' + palette.darker + '" d="M45.35 164.165l17.49 19.803h75.383l16.852-19.803"/>' +
        '<use fill="#000" filter="url(#b)" xlink:href="#a"/>' +
        '<use fill="' + palette.medium + '" stroke="' + palette.dark + '" mask="url(#c)" stroke-width="2" xlink:href="#a"/>' +
        '<path fill="#018EA6" d="M121.003 63.53H78.08c-3.19 0-2.706 3.485 1.418 3.485h43.955c4.123 0 4.22-3.485 1.417-3.485h-3.867z"/>' +
        '<path d="M106.475 42.542c.445-.486.74-1.1.8-1.802.15-1.717-1.136-3.225-2.874-3.377-1.73-.152-3.26 1.12-3.41 2.835-.06.703.13 1.348.48 1.904-10.81.365-20.04 10.24-20.67 17.5l43.02 3.764c.64-7.26-6.74-18.587-17.32-20.824" fill="#DDD"/>' +
        '<path d="M117.808 57.225c-1.743-4.045-5.163-7.707-9.386-10.046-.56-.31-.76-1.01-.446-1.56.313-.56 1.02-.75 1.58-.44 4.66 2.58 8.447 6.64 10.386 11.15.25.58-.023 1.25-.613 1.5-.17.07-.35.1-.52.09-.43-.03-.83-.28-1.01-.7z" fill="#FFF"/>' +
        '<text x="' + feedbackScoreX + '" y="152" fill="#FFF" font-family="resmioOpenSans, Open Sans" font-size="21.615" font-weight="300" letter-spacing="0.5" >' +
          '<tspan>' + feedbackScore + '</tspan>' +
          '<tspan font-size="19">% </tspan>' +
          '<tspan>' + texts.positive.text + '</tspan>' +
        '</text>' +
        '<text fill="' + palette.darker + '" font-family="resmioOpenSans, Open Sans" font-size="12.5" letter-spacing=".439">' +
          '<tspan x="' + texts.headline.x + '" y="96">' + texts.headline.text + '</tspan>' +
          '<tspan x="'+ texts.subline.x + '" y="114">' + texts.subline.text + '</tspan>' +
        '</text>' +
        '<text id="Powered-by-resmio" font-family="resmioOpenSans, Open Sans" font-size="8.5" fill="#FFF">' +
            '<tspan x="62.2645264" y="177">Powered by resmio</tspan>' +
        '</text>' +
    '</svg>'
  )
}

function getFeedbackScore(cb) {
  // This needs to call the feedback score API endpoint instead
  var req = makeCORSRequest('https://api.resmio.com/v1/facility/' + facilityId + '/availability?date__gte=2016-03-01')
  req.onload = function onload() {
    if (req.status === 404) {
      return new Error('not found')
    } else {
      cb(req.response)
    }
  }
  req.send()
}

// Adapted from the third party JS book
function makeCORSRequest(url) {
  if (typeof XMLHttpRequest === "undefined") {
    return null;
  }

  var xhr = new XMLHttpRequest()
  if ("withCredentials" in xhr) {                    // Browsers supporting CORS
    xhr.open('GET', url, true)
  }
  else if (typeof XDomainRequest !== "undefined") {  // IE with CORS support
    xhr = new XDomainRequest();
    xhr.open('GET', url);
  }
  else {                                             // No CORS support
    xhr = null
  }
  return xhr;
}

function initialize() {
  getFeedbackScore(function(res) { console.log() })
  replaceElement()
}

r(initialize)
