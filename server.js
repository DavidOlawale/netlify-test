const express = require('express')
const app = express()
app.use(express.static(__dirname + '/myapp/dist/myapp'))

app.get('*', (req, res, next) => {
    res.sendFile(__dirname + '/myapp/dist/myapp/index.html')
})
app.listen(3000)