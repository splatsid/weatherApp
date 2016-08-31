var $;
var jQuery;
$(document).ready(function () {
    jQuery.simpleWeather({
        location: 'Auckland, NZ',
        woeid: '',
        unit: '&deg' + 'C',
        success: function (weather) {
            document.getElementById("location").innerHTML = weather.city;
            document.getElementById("temperature").innerText = weather.temp + weather.units.temp;
        },
        error: function (error) {
            jQuery("location").text(location);
        }
    });
});
//# sourceMappingURL=app.js.map