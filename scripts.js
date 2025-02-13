// scripts.js

function showQuestion() {
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.question-page').style.display = 'block';
}

function celebrate() {
    confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 }
    });
    alert("You just made my day! ❤️");
}

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function showResponse() {
    document.getElementById("response").classList.remove("hidden");
    document.getElementById("special-picture").style.opacity = 1;
    // Here you can add animations for flowers and confetti
}

function celebrate() {
    // Confetti
    confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 }
    });
    // Hide question page
    document.querySelector('.question-page').style.display = 'none';
    // Show personal message
    const messageDiv = document.getElementById('personalMessage');
    messageDiv.classList.add('fade-in');
    messageDiv.classList.add('visible');
    // Play music
    document.getElementById('loveSong').play();
    // Display bouquet after a delay
    setTimeout(() => {
        document.getElementById('virtualGift').classList.remove('hidden');
    }, 2000);
}

function celebrate() {
    // Existing confetti code
    document.querySelector('.question-page').style.display = 'none';
    document.getElementById('memoryTimeline').classList.remove('hidden');
}

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

function maybeLater() {
    // Hide question page and show result page
    document.querySelector('.question-page').style.display = 'none';
    document.getElementById('resultPage').classList.remove('hidden');

    // Update the message
    document.querySelector('#resultPage h2').textContent = "That's okay, maybe another time!";
}

function showQuestion() {
    document.querySelector('.cover').style.display = 'none';
    document.querySelector('.question-page').style.display = 'block';
}

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
// scripts.js


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

// Prevent the "Maybe Later" button from being clicked
noBtn.addEventListener('click', function(event) {
    event.preventDefault();
    moveNoButton();
});


