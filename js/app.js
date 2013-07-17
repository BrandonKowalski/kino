var loadSavedKino = function() {
    var loc = location.href;
    var qs = loc.split("?")[1];
    var qsp = decodeURIComponent(qs).split("&");
    var vidSnip = qsp[2].split("=");
    var videos = vidSnip[1].split(";");
    playKino(videos);
}

var playKino = function(videos) {
    var i = 0;
    var sources = videos.kino;
    console.log(JSON.stringify(sources));
    $('#kino-video').bind('ended', function() {
        //'this' is the DOM video element
        this.src = sources[i++ % sources.length];
        this.load();
        this.play();
    });
}

$(document).ready(function() {
    loadSavedKino();
});

