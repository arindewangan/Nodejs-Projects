const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')))

// const arinMiddleware = (req, res, next) => {
//     console.log(req)
//     next()
// }
// app.use(arinMiddleware)

app.get('/hello/:name', (req, res) => {
    res.send('Hello World!' + req.params.name)
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/api', (req, res) => {
    res.json({ "name": "arin", "age": 18 })
})
app.listen(port, () => {
    console.log(`Example app listening at  http://localhost:${port}`)
})