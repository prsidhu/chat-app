const path = require('path')
const express = require('express')

const publicPath = path.join(__dirname, '../public')

var app = express()
const port = process.env.PORT || 3000
// app.use(bodyParser.json())
app.use(express.static(publicPath))


app.get('/', (req, res) => {
    app.sendFile(publicPath + 'index.html')
})


app.listen(port, () => {
    console.log(`running on ${port}`)
})

module.exports = {app}

