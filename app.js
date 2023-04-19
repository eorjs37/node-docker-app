const express = require('express')
const app = express()
const port = 3000
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    console.log("진입")
    res.send('Hello World!')
})

app.listen(port, HOST,() => {
    console.log(`Running on http://${HOST}:${port}`);
})