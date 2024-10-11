function playAudio() {
    var audio = new Audio('loveStory.mp3');
    audio.play();
}

document.getElementById('container').style.visibility="hidden"
document.getElementById('container').style.display="none"

function myFunction() {
    document.getElementById('front').style.visibility="hidden"
    document.getElementById('front').style.display= "none";
    document.getElementById('container').style.visibility="visible"
    document.getElementById('container').style.display="flex"
}