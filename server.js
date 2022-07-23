import net from 'node:net'

const server = new net.Server()
server.on('connection', socket => {
  socket.on('data', requestContent => {
    console.log('----- request')
    console.log(requestContent.toString())
    console.log('-----')
    socket.end('HTTP/1.1 200 OK\r\ninvalid:\0invalid\r\n\r\n')
  })
})
server.listen(3000, 'localhost')
