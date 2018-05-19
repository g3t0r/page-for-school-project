var playingSong = "";

var songs = document.getElementsByClassName("song");

for (i = 0; i < songs.length; i++) {
    songs[i].onclick = function () {
        pauseOrPlay(this);
    }
}

function pauseOrPlay(song) {
    var audio = song.getElementsByTagName("audio")[0];
    var playIcon = song.getElementsByClassName("mediaButtons")[0];
    var pauseIcon = song.getElementsByClassName("mediaButtons")[1];

    if (audio.paused) {
        play(audio, pauseIcon, playIcon);
        song.style.color="red";
    } else {
        pause(audio, pauseIcon, playIcon);
    }
}

function play(audio, pause, play) {
    audio.play();
    play.classList.add("hidden");
    pause.classList.remove("hidden");
}

function pause(audio, pause, play) {
    audio.pause();
    play.classList.remove("hidden");
    pause.classList.add("hidden");
}


function setProgressBarOfSong(song) {
    
}