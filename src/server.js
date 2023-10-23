import http from 'node:http'

const tasks = []

const server = http.createServer((req, res) => {
     const { method, url } = req

     console.log(method, url)
     if (method === 'GET' && url === '/tasks') {
          return res
               .end(JSON.stringify(tasks))
     }

     return res.end('Oi World')
})

server.listen(3333)