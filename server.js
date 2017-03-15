var readStream = require('fs').createReadStream
var createServer = require('http').createServer
var ws = require('websocket-stream')
var through = require('through2')
var split = require('split2')

var server = createServer(function (req, res) {
  if (req.url === '/bundle.js') readStream('bundle.js').pipe(res)
  
  else res.end(`
    <!doctype html>
    <meta charset='utf8'>
    <body>
      <script src='bundle.js'></script>
    </body>
  `)
})

server.listen(9090, function () {
  console.log('http://localhost:9090') 
})


// do websocket stuff
// var wsServer = ws({ server: server}, connection)
// 
// function connection (stream) {
//   var sp = stream.pipe(split(JSON.parse))
//   
//   sp.on('error', function (err) {
//     console.error(err) 
//   })
//   
//   sp.pipe(through.obj(write))
//   
//   
//   function write (row, enc, next) {
//     if (!row) next()
// 
//     if (row.count) {
//       // just echo the count back to the client
//       stream.write(row)
//     }
//   }
// }

