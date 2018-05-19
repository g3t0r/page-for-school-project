var playingSong = null;

var songs = document.getElementsByClassName("song");

for (i = 0; i < songs.length; i++) {
    songs[i].onclick = function () {
        if (playingSong == this || playingSong == null) {
            if (playingSong == null) playingSong = this;
            pauseOrPlay(this);
            setProgressBarOfSong(this);
        } else {
            resetStateOfSong(playingSong);
            playingSong = this;
            pauseOrPlay(this);
            setProgressBarOfSong(this);
        }
    }
}

function pauseOrPlay(song) {
    var audio = song.getElementsByTagName("audio")[0];
    var playIcon = song.getElementsByClassName("mediaButtons")[0];
    var pauseIcon = song.getElementsByClassName("mediaButtons")[1];

    if (audio.paused) {
        play(audio, pauseIcon, playIcon);
        song.style.color = "red";
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
    var audio = song.getElementsByTagName("audio")[0];
    var progressBar = song.getElementsByClassName("progressBar")[0];
    if (audio.paused) {

    } else {
        var songPercentage = audio.currentTime / audio.duration * 100;
        progressBar.style.width = songPercentage + "%";
        setTimeout(function () { setProgressBarOfSong(song) }, 1);
    }
}

function resetStateOfSong(song) {
    song.style.color = "black";
    song.getElementsByTagName("audio")[0].load();
    song.getElementsByClassName("progressBar")[0].style.width = "0";
    song.getElementsByClassName("mediaButtons")[0].classList.remove("hidden");
    song.getElementsByClassName("mediaButtons")[1].classList.add("hidden");
}