const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch');

app.use('/', express.static('public'))

app.get('/api/weather', async (req, res) => {
    const APIkey = 'a2906b093bfe0cb70f7c5e3e7b3baeb7'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${61.77816}&lon=${34.36404}&appid=${APIkey}`);
    const data = await response.json();

    res.send({
         'name': data.name,
         'temp': Math.round(data.main.temp),
         'humidity': data.main.humidity  
    })

})
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
