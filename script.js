// Pomodoro Timer Variables
let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds

const timerDisplay = document.getElementById('timer');
const startPauseBtn = document.getElementById('start-pause');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startPauseBtn.textContent = 'Pause';
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        startPauseBtn.textContent = 'Start';
        alert('Time is up!');
      }
    }, 1000);
  } else {
    pauseTimer();
  }
}

function pauseTimer() {
  isRunning = false;
  startPauseBtn.textContent = 'Start';
  clearInterval(timer);
}

function resetTimer() {
  pauseTimer();
  timeLeft = 25 * 60;
  updateDisplay();
}

startPauseBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();

// Dark mode toggle with localStorage
// Sun/Moon toggle logic
function updateThemeIcon() {
  const isDark = document.body.classList.contains('dark-mode');
  document.getElementById('sun-icon').style.display = isDark ? 'none' : '';
  document.getElementById('moon-icon').style.display = isDark ? '' : 'none';
}

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
updateThemeIcon();

document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
  updateThemeIcon();
});