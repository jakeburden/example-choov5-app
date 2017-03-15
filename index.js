var choo = require('choo')
var html = require('choo/html')

if (module.parent) {
  exports.trackClicks = trackClicks
} else {
  var app = choo()
  app.route('/', mainView)
  app.use(trackClicks())
  app.mount('body')
}

function mainView (state, emit) {
  return html`
    <body>
      <h1>${state.clicks}</h1>
      <button onclick=${onclick}>click me</button>
    </body>
  `
  
  function onclick () {
    emit('clicked')  
  }
}

function trackClicks () {
  return function (state, emitter) {
    state.clicks = 0

    emitter.on('clicked', function () {
      state.clicks++
      emitter.emit('render')
    })
  }
}

