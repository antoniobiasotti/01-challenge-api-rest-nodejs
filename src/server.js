import http from 'node:http'

const server = http.createServer((req, res) => {
     return res.end('Oi World')
})

server.listen(3333)