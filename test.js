var EventEmitter = require('events').EventEmitter
var spok = require('spok')
var test = require('tape')

var app = require('./')
var trackClicks = app.trackClicks()

test('should init empty state', function (t) {
  var emitter = new EventEmitter()
  var state = {}
  trackClicks(state, emitter)
  spok(t, state, {})
  
  t.end()
})

test('should increase clicks count to 100', function (t) {
  var emitter = new EventEmitter()
  var state = {}
  trackClicks(state, emitter)
  
  for (var i = 0; i !== 100; i++) {
    emitter.emit('clicked')  
  }
  
  spok(t, state.clicks, 100)
  
  t.end()
})

