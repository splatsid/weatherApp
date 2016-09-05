var $;
var position
var timezoneJs;
var loc;
var Maplace;
var $;
if("geolocation in navigator"){
  position = navigator.geolocation.getCurrentPosition(function(position){  loc = position.coords.latitude + ',' + position.coords.longitude;
});
}else{
loc = 'Auckland, NZ';
}

var button = document.getElementById("btn");

button.onclick = function(){
  $(document).ready(function() {
    $.simpleWeather({
      location: loc,
      woeid: '',
      unit: 'C',
      success: function(weather) {
        document.getElementById("location").innerHTML = weather.city;
        document.getElementById("temperature").innerHTML = weather.temp +"°"+ weather.units.temp;
      },
      error: function(error) {
        document.getElementById("location").innerHTML = "error"
      }
    });
  });
};

$(".foot").fittext();
