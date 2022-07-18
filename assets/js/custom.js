var icon = document.getElementById('icon');
var ftrlogo = document.getElementById('ftrlogo');

icon.onclick = function () {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        icon.src = "assets/img/sun.png";
        ftrlogo.src = "assets/img/footerdark.png";
    } else {
        icon.src = "assets/img/moon.png";
        ftrlogo.src = "assets/img/footerlogo.png";
    }
}





var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player("video", {
        events: {
            // call this function when player is ready to use
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function () {
        player.playVideo();
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function () {
        player.pauseVideo();
        pauseButton.style.display = 'none';
        playButton.style.display = 'inline-block';
    });
}
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);