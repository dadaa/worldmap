var Main = {
  init: function() {
    Main.setupAmbientLightSensor();
  },
  setupAmbientLightSensor: function() {
    window.addEventListener("devicelight", function(e) {
      $("#label").text("ambient light:"+e.value);
      var opacity = 1-e.value/150;
      $("#night").css("opacity", opacity);
    });
  }
}

$(document).ready(function() {
  Main.init();
});