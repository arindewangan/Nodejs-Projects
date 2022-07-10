const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('This is an about page')
})
app.get('/arin', (req, res) => {
    res.send('I am Arin')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})