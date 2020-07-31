 //Time & Date
 
let now = new Date();

    
        let h3 = document.querySelector("h3");

        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let year = now.getFullYear();
        

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        days
        let day = days[now.getDay()]; 

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[now.getMonth()];
       


        h3.innerHTML = ` Current Time: ${day} ${month} ${date}, ${year} ${hours}:${minutes}`;

// Search 




function displayWeatherCondition(response) {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
  response.data.main.temp
  );

  let description = document.querySelector("#description");
  description.innerHTML = `${response.data.weather[0].description} |`;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidty: ${response.data.main.humidity}% |`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind Speed: ${response.data.wind.speed}mph`;
}

function searchCity(city) {
  let apiKey = "8f64ba8aed726b6e04d4af5e8025ebf4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "8f64ba8aed726b6e04d4af5e8025ebf4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);

}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);

}

let searchForm = document.querySelector("#city-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Las Vegas");
