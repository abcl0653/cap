const fs = require('fs')
const http = require('http');
const path = require('path')
const mime = require('./modules/getmime')
const url = require('url')

http.createServer(function (request, response) {
  // response.end('Hello World');

  // var pathname = request.url 
  // can not handle xxx/dds/abc.json?params=123
  // so use the following instead
  var pathname = url.parse(request.url).pathname

  if (pathname=='/') {
    pathname = '/index.html'
  }
  
  if (pathname!='/favicon.ico'){
      console.log(pathname) 

      fs.readFile('./static' + pathname, async (err, result) => {
        if (err) {
          console.log('404')
          fs.readFile('static/404.html', (error, result404) => {
            response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'})
            response.write(result404)
            response.end() // End the response
          })
        } else {
          let extname = path.extname(pathname)
          // async function getMime(extname) {
          //   console.log(await mime.getMime(extname))
          // }
          response.writeHead(200, {'Content-Type': await mime.getMime(extname)+';charset="utf-8"'});
          response.write(result)
          response.end()
        }
      })
  }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');