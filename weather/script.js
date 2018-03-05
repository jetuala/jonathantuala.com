$(document).ready(function(){
  // debugger;
  if (navigator.geolocation) {
    var locationData = [];
    navigator.geolocation.getCurrentPosition(function(position) {
      locationData[0] = position.coords.latitude;
      locationData[1] = position.coords.longitude;
      var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat=" + locationData[0] + "&lon=" + locationData[1] + "&APPID=04ddb73233e5b4099196879435c19a11&units=metric";
      $.getJSON(weatherAPI, function(x){
        $("#data").html("latitude: " + x.coord.lat + " longitude: " + x.coord.lon);
        var weatherIcon = "http://openweathermap.org/img/w/" + x.weather[0].icon + ".png";
        $("#weatherIcon").attr("src", weatherIcon);
        $("#temp").html(x.main.temp + "°C");
        $("#condition").html(x.weather[0].description);
        $("#location").html(x.name + ", " + x.sys.country);
        var weatherMap = "https://tile.openweathermap.org/map/precipitation_new/8/" + locationData[1] + "/" + locationData[0] + ".png?appid=04ddb73233e5b4099196879435c19a11"
        $("#map").attr("src", weatherMap);
      });
    });
  }
});
