import http from 'node:http'

const tasks = []

const server = http.createServer((req, res) => {
     const method = req.method

     const url = req.url

     console.log(method, url)

     return res.end('Oi World')
})

server.listen(3333)