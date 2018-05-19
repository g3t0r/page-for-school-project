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
}

document.getElementById("madeInGermanyThumbnail").onclick = function () {
    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("madeInGermany");
}

document.getElementById("blankBanshee0Thumbnail").onclick = function () {
    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("blankBanshee0");
}


document.getElementById("blessedAndPossessedThumbnail").onclick = function () {
    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("blessedAndPossessed");
}

document.getElementById("foreverFaithlessThumbnail").onclick = function () {
    setStateOfThumbnailsToNormal();
    this.classList.add("choosedAlbum");
    changeContainerTo("foreverFaithless");
}


hideAllContainers();
var hehe = document.getElementById("noGraveButTheSea");
hehe.style.display = "block";
document.getElementById("noGraveButTheSeaThumbnail").classList.add("choosedAlbum");