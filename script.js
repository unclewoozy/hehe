function checkPasscode() {
    const correctPasscode = "1421"; 
    const input = document.getElementById("passcodeInput").value;
    const secretMessage = document.getElementById("secretMessage");

    if (input === correctPasscode) {
        secretMessage.style.display = "block"; 
    } else {
        alert("Incorrect passcode. Please try again.");
        document.getElementById("passcodeInput").value = ""; 
    }
}

function playBGM() {
    const music = document.getElementById("backgroundMusic");
    const spinningImage = document.getElementById("spinningImage");

    if (music.paused) {
        music.play(); 
        spinningImage.classList.remove("hidden"); 
        document.getElementById("playBGMButton").textContent = "Stop"; 
    } else {
        music.pause(); 
        spinningImage.classList.add("hidden");
        document.getElementById("playBGMButton").textContent = "Play"; 
    }
}