const key = 'c557082f505aec85a38f97a374f9ed15';
if(key=='') document.getElementById('temp').innerHTML = ('Remember to add your api key!');

function weatherBallon( cityID ) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key)
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            drawWeather(data);
        })
        .catch(function() {
            // catch any errors
        });
}
function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
    var description = d.weather[0].description;
    var humidity = d.main.humidity;

    document.getElementById('temp').innerHTML = '<p>' + celcius + '&deg;'  + '</p>';
    document.getElementById('humidity').innerHTML = '<p>' + humidity + '%</p>';

    if( description.indexOf('rain') > 0 ) {
        document.getElementById('openweather').className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.getElementById('openweather').className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.getElementById('openweather').className = 'sunny';
    } else {
        document.getElementById('openweather').className = 'clear';
    }
}
window.onload = function() {
    weatherBallon( 'Edinburgh' ); //Change
};

//API Key: c557082f505aec85a38f97a374f9ed15
// http://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&appid=c557082f505aec85a38f97a374f9ed15
