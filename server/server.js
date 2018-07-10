const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')

var app = express()
var server = http.createServer(app)
var io = socketIO(server)


const port = process.env.PORT || 3000
app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('new connection')

    socket.emit('newMessage', {
        from: 'buzo',
        text: 'onomnoomnom',
        createdAt:243
    })

    socket.on('createMessage', (message) => {
        console.log('message: ', message)
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    })

    socket.on('disconnect', () => {
        console.log('disconnected')
    })
})


server.listen(port, () => {
    console.log(`running on ${port}`)
})

module.exports = {app}

