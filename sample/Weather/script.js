/*
// HTML5 Geolocation
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
lat = position.coords.latitude;
long = position.coords.longitude;

}
// END of HtML5 Geolocation


function onew() {
  $.getJSON("https://api.apixu.com/v1/current.json?key=4394b408e8f4448a972144240172108&q=" + lat + "," + long + "", function(data) {
  	 temp = data.current.temp_c;
  	 main = data.current.condition.text;
     city = data.location.region;
    country = data.location.country;
    humidity = data.current.humidity;
    icon = data.current.condition.icon;
    will_it_rain= data.will_it_rain;
    //Do stuff with data.
    console.log(data);
   document.getElementById("temp").innerHTML = temp;
    document.getElementById("humidity").innerHTML = humidity;
   document.getElementById("main").innerHTML = main;
   document.getElementById("city").innerHTML = city;
   document.getElementById("country").innerHTML = country;
    });};

//Magic code
jQuery.ajaxPrefilter(function(options) {
if (options.crossDomain && jQuery.support.cors) {
options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
}
});
//END of Magic code

*/

$(document).ready(function() {
    $("#getWeather").on("click", function() {
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {
          var x = position.coords.latitude;
          var y = position.coords.longitude;
          $.getJSON("https://api.apixu.com/v1/current.json?key=4394b408e8f4448a972144240172108&q=" + x + "," + y + "", function(data) {
            var city = data.location.name;
            var country = data.location.country;
            var temp = data.current.temp_c;
            var tempf = data.current.temp_f;
            var humidity = data.current.humidity;
            var condition = data.current.condition.text;
            var wind = data.current.wind_mph;
           // var weather = data.weather[0].description;
           // ??? var image = "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";
            var icon = data.current.condition.icon;
            
            
            
            console.log();
          
            $("#image").attr("src", icon);
            $("#city").html(city+"</br>"+country+"</br>"+condition+"</br>Humidity: "+humidity+"%</br>");
            $("#tempC").html(temp+"&ordm;");
            $("#tempFC").html("F/C");
            $("#tempF").html(tempf+"F");
            $("#wind").html("</br>Wind: "+wind+"mph");
            
          });
        });
      } else {
        $("#displayBox").html("Unable to access geolocation data.");
        }
    });
  });
  
  
  
  // Magic code
  jQuery.ajaxPrefilter(function(options) {
  if (options.crossDomain && jQuery.support.cors) {
  options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
  }
  });
  // END of Magic code
  
  var tog = document.getElementById("tempFC");
  var thing = document.getElementById("tempC");
  var thing2 = document.getElementById("tempF");
  
  tog.addEventListener("click", function() {
    
    tempC.classList.toggle("m-fadeOut");
    tempF.classList.toggle("m-fadeOut");
    
  });