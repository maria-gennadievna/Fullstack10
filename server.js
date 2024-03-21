const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('public'))

app.get('/api/weather', (req, res) => {
    //   res.send('Hello World!')
    res.send({
        'temperature': 34
    })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})