const christmasSong = document.getElementById('christmasSong');
const playPauseButton = document.getElementById('playPauseButton');
const currentTime = document.getElementById('currentTime');
const totalTime = document.getElementById('totalTime');

window.addEventListener('load', () => {
    setTimeout(updateTotalTime, 500);
    updateCurrentTime();
});

playPauseButton.addEventListener('click', () => {
    if (christmasSong.paused) {
        christmasSong.play();
        playPauseButton.textContent = 'Pause';
    } else {
        christmasSong.pause();
        playPauseButton.textContent = 'Play';
    }
});

function updateCurrentTime() {
    currentTime.textContent = formatTime(christmasSong.currentTime);
    requestAnimationFrame(updateCurrentTime);
}

function updateTotalTime() {
    totalTime.textContent = formatTime(christmasSong.duration);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Snowfall effect
for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDelay = `${Math.random() * 10}s`;
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
    document.body.appendChild(snowflake);
}
