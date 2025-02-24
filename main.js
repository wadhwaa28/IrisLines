// Function to play the Iris voice lines
function playIrisVoice(linenumber) {
    if (linenumber == 1) {
        var audio = new Audio('iris_line1.mp3');
        audio.play();
    } else if (linenumber == 2) {
        var audio = new Audio('iris_line2.mp3');
        audio.play();
    } else if (linenumber == 3) {
        var audio = new Audio('iris_line3.mp3');
        audio.play();
    }
}

// Add event listener to the button
document.getElementById("playButton").addEventListener("click", playIrisVoice(1));
document.getElementById("taunt1").addEventListener("click", playIrisVoice(2));
document.getElementById("taunt2").addEventListener("click", playIrisVoice(3));
