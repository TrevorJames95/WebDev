document.getElementById("keyA").addEventListener("click", function() {
    playAudio("audio/A.mp3")
});

document.getElementById("keyS").addEventListener("click", function() {
    playAudio("audio/S.mp3")
});

document.getElementById("keyD").addEventListener("click", function() {
    playAudio("audio/D.mp3")
});

document.getElementById("keyF").addEventListener("click", function() {
    playAudio("audio/F.mp3")
});

document.getElementById("keyG").addEventListener("click", function() {
    playAudio("audio/G.mp3")
});

document.getElementById("keyH").addEventListener("click", function() {
    playAudio("audio/H.mp3")
});

document.getElementById("keyJ").addEventListener("click", function() {
    playAudio("audio/J.mp3")
});

document.getElementById("keyW").addEventListener("click", function() {
    playAudio("audio/W.mp3")
});

document.getElementById("keyE").addEventListener("click", function() {
    playAudio("audio/E.mp3")
});

document.getElementById("keyT").addEventListener("click", function() {
    playAudio("audio/T.mp3")
});

document.getElementById("keyY").addEventListener("click", function() {
    playAudio("audio/Y.mp3")
});

document.getElementById("keyU").addEventListener("click", function() {
    playAudio("audio/U.mp3")
});

document.addEventListener("keydown", function(event) {
    switch (event.code){
        case "KeyA":
            playAudio("audio/A.mp3")
            break;
        case "KeyS":
            playAudio("audio/S.mp3")
            break;
        case "KeyD":
            playAudio("audio/D.mp3")
            break;
        case "KeyF":
            playAudio("audio/F.mp3")
            break;
        case "KeyG":
            playAudio("audio/G.mp3")
            break;
        case "KeyH":
            playAudio("audio/H.mp3")
            break;
        case "KeyJ":
            playAudio("audio/J.mp3")
            break;
        case "KeyW":
            playAudio("audio/W.mp3")
            break;
        case "KeyE":
            playAudio("audio/E.mp3")
            break;
        case "KeyT":
            playAudio("audio/T.mp3")
            break;
        case "KeyY":
            playAudio("audio/Y.mp3")
            break;
        case "KeyU":
            playAudio("audio/U.mp3")
            break;
        default:
            console.log("Random other key was pressed.")
            break;
    }
});

function playAudio(path){
    let x = document.createElement("AUDIO");
    x.src = path;
    x.play();
}