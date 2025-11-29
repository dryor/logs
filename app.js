// Update current time display
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set initial time
    updateTime();

    // Update time every second
    setInterval(updateTime, 1000);
});
