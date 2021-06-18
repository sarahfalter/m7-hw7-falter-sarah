var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

    /*Print City Name at end of header 
    var cityName = document.createElement('h1');
    var c = document.createTextNode("Orlando");

    document.querySelector('h1').appendChild(c);
    */

    function showCityName () {
        var city = document.createTextNode(apiResult.name),
        displayCity = document.getElementById('city');

        displayCity.appendChild(city);
    }

    showCityName();

    //print weather from api at end of main

     
    function showWeather () {
    var weather = document.createTextNode(apiResult.weather[0].description),
    displayDescription = document.getElementById('weather');

    displayDescription.appendChild(weather);

    }
    
    showWeather();

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=32835,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();