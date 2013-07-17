var loadSavedKino = function() {
    var loc = location.href;
    var qs = loc.split("?")[1];
    var qsp = decodeURIComponent(qs).split("&");
    var vidSnip = qsp[2].split("=");
    var videos = vidSnip[1].split(";");
    if (videos.length > 0) {
        playKino(videos);
    }

}

var playKino = function(videos) {
    var i = 0;
    $(".kino-video-deck").show();
    console.log(JSON.stringify(videos));
    $('#kino-video').bind('ended', function() {
        //'this' is the DOM video element
        this.src = videos[i++ % videos.length];
        this.load();
        this.play();
    });
}

$(document).ready(function() {
    loadSavedKino();
});

