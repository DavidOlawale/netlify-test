const express = require('express')
const joi = require('joi')
express.json()
port = process.env.port || 3000
const app = express()
app.get('/', (req, res) => {
    res.send({
        name: 'olawale david',
        status: 'senior developer'
    })
    res.end()
})
app.listen(port)

console.log(joi.string())