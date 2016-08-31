var $;
var position
var timezoneJs;
   position = 'Auckland, NZ';

var button = document.getElementById("btn");

button.onclick = function(){
  $(document).ready(function() {
    $.simpleWeather({
      location: position,
      woeid: '',
      unit: 'C',
      success: function(weather) {
        document.getElementById("location").innerHTML = weather.city;
        document.getElementById("temperature").innerText = weather.temp + weather.units.temp;
      },
      error: function(error) {
        document.getElementById("location").innerHTML = "Error"
      }
    });
  });
};
