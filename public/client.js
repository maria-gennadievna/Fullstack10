let loadButton = document.getElementById('load')

loadButton.onclick = async () => {
    let temperatureElement = document.getElementById('temperature')
    // temperatureElement.innerText = 30 

    let res = await fetch ('/api/weather')
    let resJson = await res.json()
    temperatureElement.innerHTML = resJson.temperature
}