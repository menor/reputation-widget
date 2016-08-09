// Include Open Sans
// get facility-id from params
// call the api for the feedback rating
// Adjust position of positive based on rating (edge cases <10% and 100%)
// change the color palette from a param
// contain globals into an object
// 'package' the code (base64 encoding of the svg?)

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
      x: '78.2223448'
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
      x: '78.2223448'
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
      x:'80'
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
      x:'80'
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
      x:'78.2223448'
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
      x:'78.2223448'
    },
  }
}

// If we don't have a translation for the user language we default to english
// var texts = translations[lang] || translations['en']
texts = translations['en']

// Next 2 values should be passed as params
var facilityId = 'the-fish'
var palette = palettes.lightBlue

// Initialize function
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function replaceElement() {
  var el = document.getElementById('resmio-badge')
  el.innerHTML = (
    `
    <svg width="201" height="229" viewBox="0 0 201 229" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <rect id="a" x="14.543" y="124.148" width="172.751" height="40.153" rx="2"/>
        <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="b">
          <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.149230072 0" in="shadowBlurOuter1"/>
        </filter>
        <mask id="c" x="0" y="0" width="172.751" height="40.153" fill="#fff">
          <use xlink:href="#a"/>
        </mask>
      </defs>
        <path id="scroll-torn" fill="${palette.dark}" d="M145.566 170.98l41.51-7.328H151.34m-93.217 7.432l-41.408-7.323 37.614.49"/>
        <path id="badge-back"  stroke="${palette.dark}" fill="${palette.medium}" d="M35.67 147.343C4.313 98.235 11.697 61.825 11.697 61.825l89.878-50.655 88.562 49.668s7.383 36.41-23.976 85.518c-31.35 49.108-65.14 70.45-65.14 70.45s-33.99-20.356-65.35-69.463z"/>
        <path id="badge-fill"  stroke="${palette.dark}" fill="#FFF" d="M43.537 142.9c-27.977-43.786-21.39-76.25-21.39-76.25l80.186-45.168 79.01 44.288s6.588 32.465-21.39 76.253c-27.976 43.79-58.948 62.81-58.948 62.81s-29.49-18.14-57.468-61.93z"/>
        <path id="legend-back" fill="${palette.darker}" d="M45.35 164.165l17.49 19.803h75.383l16.852-19.803"/>
        <use fill="#000" filter="url(#b)" xlink:href="#a"/>
        <use fill="${palette.medium}" stroke="${palette.dark}" mask="url(#c)" stroke-width="2" xlink:href="#a"/>
        <path fill="#018EA6" d="M121.003 63.53H78.08c-3.19 0-2.706 3.485 1.418 3.485h43.955c4.123 0 4.22-3.485 1.417-3.485h-3.867z"/>
        <path d="M106.475 42.542c.445-.486.74-1.1.8-1.802.15-1.717-1.136-3.225-2.874-3.377-1.73-.152-3.26 1.12-3.41 2.835-.06.703.13 1.348.48 1.904-10.81.365-20.04 10.24-20.67 17.5l43.02 3.764c.64-7.26-6.74-18.587-17.32-20.824" fill="#DDD"/>
        <path d="M117.808 57.225c-1.743-4.045-5.163-7.707-9.386-10.046-.56-.31-.76-1.01-.446-1.56.313-.56 1.02-.75 1.58-.44 4.66 2.58 8.447 6.64 10.386 11.15.25.58-.023 1.25-.613 1.5-.17.07-.35.1-.52.09-.43-.03-.83-.28-1.01-.7z" fill="#FFF"/>
        <text  fill="#FFF" font-family="Open Sans" font-size="21.615" font-weight="300" letter-spacing="1" >
          <tspan x="32.0343862" y="152">90</tspan>
          <tspan x="59" y="152" font-size="19">% </tspan>
          <tspan x=${texts.positive.x} y="152">${texts.positive.text}</tspan>
        </text>
        <text fill="${palette.darker}" font-family="Open Sans" font-size="12.5" letter-spacing=".439">
          <tspan x="${texts.headline.x}" y="96">${texts.headline.text}</tspan>
          <tspan x="${texts.subline.x}" y="114">${texts.subline.text}</tspan>
        </text>
        <text id="Powered-by-resmio" font-family="OpenSans, Open Sans" font-size="8.5" fill="#FFFFFF">
            <tspan x="62.2645264" y="177">Powered by resmio</tspan>
        </text>
    </svg>
  `
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

ready(initialize)
