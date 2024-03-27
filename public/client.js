// повтор урока
let loadButton = document.getElementById('loadButton')
loadButton.onclick = () => {

    async function success(position) {

        let res = await fetch('/api/weather')
        let resJson = await res.json()

        let nameElement = document.getElementById('name')
        nameElement.innerText = resJson.name

        let tempElement = document.getElementById('temp')
        tempElement.innerText = Math.round(resJson.temp - 273) + "°C"

        let humidityElement = document.getElementById('humidity')
        humidityElement.innerText = resJson.humidity + "%"
    }

    function error() {
        status.textContent = "Невозможно получить ваше местоположение";
    }

    if (!navigator.geolocation) {
        status.textContent = "Geolocation не поддерживается вашим браузером";
    } else {
        status.textContent = "Определение местоположения…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

