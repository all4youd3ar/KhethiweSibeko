
// Show question page
function showQuestion() {
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.question-page').style.display = 'block';
}

// Celebrate when "Yes" is chosen
function celebrate() {
    // Confetti effect
    confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 }
    });

    // Hide question page and show result page
    document.querySelector('.question-page').style.display = 'none';
    document.getElementById('resultPage').classList.remove('hidden');

    // Update the message
    document.querySelector('#resultPage h2').textContent = "I'm so happy you said yes!";
}

// Show crying emojis when "Maybe Later" is chosen
function maybeLater() {
    // Hide question page and show crying overlay
    document.querySelector('.question-page').style.display = 'none';
    document.getElementById('cryingOverlay').classList.remove('hidden');

    // Stop the confetti
    window.confetti = null;
}

// Move the "Maybe Later" button to a random position
function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const buttonsDiv = document.querySelector('.buttons');

    // Get the dimensions of the parent container
    const containerWidth = buttonsDiv.offsetWidth;
    const containerHeight = buttonsDiv.offsetHeight;

    // Get the dimensions of the button
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    // Calculate new random positions
    const maxX = containerWidth - buttonWidth;
    const maxY = containerHeight - buttonHeight;

    let randX = Math.floor(Math.random() * maxX);
    let randY = Math.floor(Math.random() * maxY);

    // Apply the new position
    noBtn.style.position = 'absolute';
    noBtn.style.left = randX + 'px';
    noBtn.style.top = randY + 'px';
}

// Prevent the "Maybe Later" button from being clicked by moving it
document.getElementById('noBtn').addEventListener('click', function(event) {
    event.preventDefault();
    moveNoButton();
});
