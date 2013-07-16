var v = [];
var loadVine = function() {
  $.ajax({
    type: 'GET',
    url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fvine.co%2Fv%2FhWP0FJKKBvK%22%20and%20xpath%3D'%2Fhtml%2Fhead%2Fmeta'&format=json&diagnostics=true",
    dataType: 'jsonp',
    success: function(data){
      v.push(data);
    },
    error: function(xhr, type){
      alert('Ajax error!')
    }
  });
}

$(document).ready(function() {
    //place code inside jQuery ready event handler
    //to ensure videoElement is available
    var i = 0;
    var sources = ["https://v.cdn.vine.co/r/videos/7FAE355B72969068186794455040_1b16b0f2982.3_qCAC8AuBaJfdtL5amRxxT_lIfmJNXZxvoTjFiHYHCmUok2fzoobaPsY7ZUIiOIJY.mp4?versionId=7YqGo4tFmsW.xoujX8038ZOPrA6hK0cV",
    "https://mtc.cdn.vine.co/r/videos/DA240841AE969068449403994112_1de31d699be.3_k986V4hlY3vr5ONl_Dg6jek52MTX5CmvxYOYhs2dYB3lZ6_0dVaddd_AZyKe.h6..mp4?versionId=J._.hh_bpnpAAwIT2C5Nj55FhYqvRbuP"];
    $('#kino-video-deck').bind('ended', function() {
        //'this' is the DOM video element
        this.src = sources[i++ % sources.length];
        this.load();
        this.play();
    });
});
