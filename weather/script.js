$(document).ready(function(){
  // debugger;
  if (navigator.geolocation) {
    var locationData = [];
    navigator.geolocation.getCurrentPosition(function(position) {
      locationData[0] = position.coords.latitude;
      locationData[1] = position.coords.longitude;
      var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat=" + locationData[0] + "&lon=" + locationData[1] + "&APPID=04ddb73233e5b4099196879435c19a11";
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
      $.getJSON(weatherAPI, function(x){
        console.log(weatherAPI);
        console.log(JSON.stringify(x.weather.description));
        console.log(x.weather.description);
        $("#condition").html(x.weather.description);
      });
    });
  }
});
