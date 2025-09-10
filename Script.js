<script>

const apiKey = "ecf67f74384e17885b4757ca20d3d0da";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const whetherIcon = document.querySelector(".weather-icon");


async function checkWhether(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";    
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    
    if(data.weather[0].main == "Clouds"){
        whetherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        whetherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        whetherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        whetherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        whetherIcon.src = "images/mist.png";
    }

    
    
   
}


searchBtn.addEventListener("click", ()=>{
    checkWhether(searchBox.value);
})



checkWhether();
</script>


</body>
</html>
