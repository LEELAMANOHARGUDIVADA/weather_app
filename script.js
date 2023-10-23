const APIKEY = "2c2fdf740ee2e081c2eb43b0e16884ee";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');
const weatherIcon =  document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(APIURL + city + `&appid=${APIKEY}`);
    
    if(response.status == 404){
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = data.main.temp + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' Km/h';
    
        if(data.weather[0].main == 'Clear'){
            weatherIcon.src ="img/clear.png";
        }
        else if(data.weather[0].main == 'Haze'){
            weatherIcon.src ="img/haze.png";
        }
        else if(data.weather[0].main == 'Clouds'){
            weatherIcon.src ="img/cloudy.png";
        }
        
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src ="img/rain.png";
        }
        else if(data.weather[0].main == 'Snow'){
            weatherIcon.src ="img/snow.png";
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src ="img/mist.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src ="img/rain.png";
        }
    
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.invalid').style.display = "none";

    }
    }

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
