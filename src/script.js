function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;

    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey = "46f591d0fa567980b4e1b4045d01d041";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=46f591d0fa567980b4e1b4045d01d041`;
    axios.get(apiUrl).then(refreshWeather);

    searchCity(searchInput.value);
}

function searchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

