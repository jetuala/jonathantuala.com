$(document).ready(function(){
  var data = {
  method: "getQuote",
  lang: "en" ,
  format:"jsonp",
  dataType: "jsonp"
  };

  var callQuote = function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", data, function(jd) {
      $("#quote").html(jd.quoteText + "  - " + jd.quoteAuthor);
    });
  };

  callQuote();
  
//  var unsplashBackground = function() {
//    $.getJSON("http://api.unsplash.com/api/?username=jetuala&collections=
//  };

});

window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-dark-grey";
        $("#quote").css("color", "white");
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-dark-grey", "");
        $("#quote").css("color", "red");
    }
}
