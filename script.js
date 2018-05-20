function hideAllContainers() {
    var containerArray = document.getElementsByClassName("container");
    for (i = 0; i < containerArray.length; i++) {
        containerArray[i].style.display = "none";
    }
}

function changeContainerTo(containerId) {
    hideAllContainers();
    var hehe = document.getElementById(containerId);
    hehe.style.display = "block";
}


function setStateOfThumbnailsToNormal() {
    var thumbnails = document.getElementsByClassName("albumThumbnailNormal");
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("choosedAlbum");
    }
}


////////////////////////////////////
document.getElementById("noGraveButTheSeaThumbnail").onclick = function () {

    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("noGraveButTheSea");
    setProperHeightOfSongDiv("noGraveButTheSea");
}

document.getElementById("madeInGermanyThumbnail").onclick = function () {
    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("madeInGermany");
    setProperHeightOfSongDiv("madeInGermany");
}

document.getElementById("blankBanshee0Thumbnail").onclick = function () {
    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("blankBanshee0");
    setProperHeightOfSongDiv("blankBanshee0");


}

document.getElementById("blessedAndPossessedThumbnail").onclick = function () {
    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("blessedAndPossessed");
    setProperHeightOfSongDiv("blessedAndPossessed");
}

document.getElementById("foreverFaithlessThumbnail").onclick = function () {
    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("foreverFaithless");
    setProperHeightOfSongDiv("foreverFaithless");
}


hideAllContainers();
var hehe = document.getElementById("noGraveButTheSea");
hehe.style.display = "block";
document.getElementById("noGraveButTheSeaThumbnail").classList.add("choosedAlbum");

function setProperHeightOfSongDiv(containerId) {
    var container = document.getElementById(containerId);
    console.log(container.id);
    var albumInfo = container.getElementsByClassName("albumInfo")[0];
    if (albumInfo == null) console.log("albumInfo==null");
    var songsDiv = container.getElementsByClassName("songs")[0];
    if (albumInfo == null) console.log("songsDiv==null");
    var image = container.getElementsByTagName("img")[0];
    if (image.clientHeight > albumInfo.clientHeight) {
        console.log(image.clientHeight);
        songsDiv.style.maxHeight = container.offsetHeight - image.offsetHeight - 40;
    } else {
        songsDiv.style.maxHeight = container.offsetHeight - albumInfo.offsetHeight - 40;
    }
}