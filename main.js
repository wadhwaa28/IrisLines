// Function to play the Iris voice lines
function playIrisVoice(linenumber) {
    // Play the alarm sound, but only once to avoid overlaps
    var alarm = new Audio('background_intro_alarm.wav');
    alarm.play();
    
    // Use a delay to allow the alarm sound to play before the Iris voice starts
    setTimeout(function() {
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
    }, 500); // 500ms delay for the alarm to play first (adjust as needed)
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
