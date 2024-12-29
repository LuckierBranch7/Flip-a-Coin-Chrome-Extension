document.addEventListener("DOMContentLoaded", () => {
    let soundEnabled = true; // Default sound is enabled
  
    // Get the sound file
    const coinFlipSound = new Audio('sfx/coin_flip_sound.wav');
  
    // Check the sound toggle state
    const soundToggle = document.getElementById('soundEffect');
    if (soundToggle) {
      soundToggle.addEventListener('change', (event) => {
        soundEnabled = event.target.checked;
      });
    }
  
    // Add event listener for the flip button
    const flipButton = document.getElementById("flipButton");
    const resultDiv = document.getElementById("result");
  
    if (flipButton && resultDiv) {
      flipButton.addEventListener("click", () => {
        // Play sound if enabled
        if (soundEnabled) {
          coinFlipSound.play();
        }
  
        // Perform the coin flip
        const result = Math.random() < 0.5 ? "Heads" : "Tails";
        resultDiv.textContent = result;
      });
    }
  });
  