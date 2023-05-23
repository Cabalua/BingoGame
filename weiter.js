function startCountdown() {
  let remainingSeconds = 30;
  const countdownElement = document.getElementById('countdown');

  const countdownInterval = setInterval(() => {
    remainingSeconds--;
    countdownElement.textContent = remainingSeconds;

    if (remainingSeconds === 0) {
      clearInterval(countdownInterval);
      showPlayAgainPopup();
    }
  }, 1000);
}

function showPlayAgainPopup() {
  const popupElement = document.createElement('div');
  popupElement.className = 'popup';
  popupElement.textContent = 'Möchten Sie noch einmal spielen?';

  const buttonYes = document.createElement('button');
  buttonYes.textContent = 'Ja';
  buttonYes.addEventListener('click', () => {
    popupElement.remove();
    resetGame();
  });

  const buttonNo = document.createElement('button');
  buttonNo.textContent = 'Nein';
  buttonNo.addEventListener('click', () => {
    popupElement.remove();
    // Hier kannst du entsprechende Aktionen ausführen, wenn das Spiel beendet ist und der Spieler nicht wieder spielen möchte.
  });

  popupElement.appendChild(buttonYes);
  popupElement.appendChild(buttonNo);
  document.body.appendChild(popupElement);
}

function resetGame() {
  // Hier kannst du die erforderlichen Aktionen ausführen, um das Spiel zurückzusetzen und erneut zu starten.
  // Zum Beispiel: Leeren der Tabelle, Neustart des Countdowns usw.
  const tableCells = document.querySelectorAll('#tableContainer table td');
  tableCells.forEach((cell) => {
    cell.textContent = '';
  });

  startCountdown();
}

document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
});



//------------------------------------------

let fallingWordsIntervalId;

function stopFallingWords() {
  clearInterval(fallingWordsIntervalId);

  const fallingWords = document.querySelectorAll('.falling-word');
  fallingWords.forEach((word) => word.remove());
}

function startGame() {
  startCountdown();
  fallingWordsIntervalId = setInterval(createFallingWord, 2000);
}

function endGame() {
  stopCountdown();
  stopFallingWords();

  const playAgain = confirm('Do you want to play again?');
  if (playAgain) {
    startGame();
  }
}

function checkEndGame() {
  if (remainingSeconds === 0) {
    endGame();
  }
}




