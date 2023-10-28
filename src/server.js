import http from 'node:http'

const tasks = []

const server = http.createServer((req, res) => {
     const { method, url } = req

     console.log(method, url)
     console.log(req.headers)
     console.log(res.headers)
     
     if (method === 'GET' && url === '/tasks') {
          return res
               .setHeader('Content-type', 'application/json')
               .end(JSON.stringify(tasks))
     }

     if (method === 'POST' && url === '/tasks') {
          tasks.push({
               id: 1,
               title: 'Teste',
               description: 'Minha primeira task',
               completed_at: '',
               created_at: new Date(),
               updated_at: '',
          })
          return res
               .writeHead(201).end()
     }

     return res.end('hello world')

})

server.listen(3333)