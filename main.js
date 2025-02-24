// Function to play the Iris voice lines
function playIrisVoice(linenumber) {
    var alarm = new Audio('background_intro_alarm.wav');
    if (linenumber == 1) {
        alarm.play();
        var audio = new Audio('iris_line1.mp3');
        audio.play();
    } else if (linenumber == 2) {
        alarm.play();
        var audio = new Audio('iris_line2.mp3');
        audio.play();
    } else if (linenumber == 3) {
        alarm.play();
        var audio = new Audio('iris_line3.mp3');
        audio.play();
    }
}

// Add event listener to the play button (clicking starts the voice line 1)
document.getElementById("playButton").addEventListener("click", function() {
    playIrisVoice(1);
});

// Add event listener to the taunt1 button (clicking starts the voice line 2)
document.getElementById("taunt1").addEventListener("click", function() {
    playIrisVoice(2);
});

// Add event listener to the taunt2 button (clicking starts the voice line 3)
document.getElementById("taunt2").addEventListener("click", function() {
    playIrisVoice(3);
});
