const openWeatherAppId = "04ddb73233e5b4099196879435c19a11"
var scale = "C";

$(document).ready(function(){
  // debugger;
  if (navigator.geolocation) {
    var locationData = [];
    navigator.geolocation.getCurrentPosition(function(position) {
      locationData[0] = position.coords.latitude;
      locationData[1] = position.coords.longitude;
      var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat=" + locationData[0] + "&lon=" + locationData[1] + "&APPID=" + openWeatherAppId + "&units=metric";

      // var mapOptions = {
      //   zoom: 13,
      //   center: new google.maps.LatLng(locationData[0], locationData[1]),
      //   style: weather
      // }
      //
      // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      //
      // var transitLayer = new google.maps.TransitLayer();
      // transitLayer.setMap(map);

      $.getJSON(weatherAPI, function(x){
        $("#data").html("latitude: " + x.coord.lat + " longitude: " + x.coord.lon);
        var weatherIcon = "http://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
        $("#weatherIcon").attr("src", weatherIcon);
        var temp = x.main.temp;
        var tempHTML = temp + "°" + scale;
        $("#temp").html(tempHTML);
        $("#condition").html(x.weather[0].description);
        $("#location").html(x.name + ", " + x.sys.country);
        // var weatherMap = "https://tile.openweathermap.org/map/precipitation_new/8/" + locationData[1] + "/" + locationData[0] + ".png?appid=" + openWeatherAppId;
        // $("#map").attr("src", weatherMap);
      });



    });
  }
});

function convertTemp(temp) {
  if (scale === "C") {
    $.getJSON()
    // var fahrenheit;
    // fahrenheit = (temp * (9/5)) + 32;
    // scale = "F";
    // tempHTML = fahrenheit + "°" + scale;
    // $("temp").html(tempHTML);
    $("convertButton").html("Convert to Celsius");
  } else {
    var celsius;
    celsius = (temp * (5/9)) - 32;
    scale = "C";
    tempHTML = celsius + "°" + scale;
    $("temp").html(tempHTML);
    $("convertButton").html("Convert to Fahrenheit");
  }
}
