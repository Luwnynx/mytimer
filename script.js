function checkPassword() {
  const input = document.getElementById('password-input').value;
  const errorMsg = document.getElementById('error-message');
  if (input === 'Luwan') {
    document.getElementById('password-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'flex';
    document.body.style.background = 'linear-gradient(135deg, #b3e0ff 0%, #e0f7fa 100%)';
    errorMsg.textContent = '';
    startFloatingHearts();
    startFloatingWords();
    startFloatingFoods();
  } else {
    errorMsg.textContent = 'Wrong code! Try again.';
  }
}

function startFloatingHearts() {
  const heartEmojis = ['❤️','💕','💖','💗','💓','💞','💘'];
  const floatingHearts = document.getElementById('floating-hearts');
  function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.fontSize = (2 + Math.random() * 2) + 'rem';
    floatingHearts.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
  setInterval(createHeart, 350);
}

function startFloatingWords() {
  const phrases = [
    'Itadakimasu',
    'Okairi',
    'Ohaiyo',
    'Oyasumi',
    'Kawaii',
    'Mochi Mochi'
  ];
  const floatingPhrases = document.querySelector('.floating-phrases');
  function createWord() {
    const word = document.createElement('span');
    word.className = 'floating-word';
    word.textContent = phrases[Math.floor(Math.random() * phrases.length)];
    word.style.left = Math.random() * 90 + 'vw';
    word.style.fontSize = (1.2 + Math.random() * 0.7) + 'rem';
    floatingPhrases.appendChild(word);
    setTimeout(() => {
      word.remove();
    }, 6000);
  }
  setInterval(createWord, 900);
}

function startFloatingFoods() {
  const foodEmojis = [
    '🍰','🧁','🍩','🍓','🍡','🍙','🍦','🍮','🐊','🦛'
  ];
  const floatingFoods = document.querySelector('.floating-foods');
  function createFood() {
    const food = document.createElement('span');
    food.className = 'floating-food';
    food.textContent = foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
    food.style.left = Math.random() * 90 + 'vw';
    food.style.fontSize = (1.8 + Math.random() * 1.2) + 'rem';
    floatingFoods.appendChild(food);
    setTimeout(() => {
      food.remove();
    }, 7000);
  }
  setInterval(createFood, 700);
}
