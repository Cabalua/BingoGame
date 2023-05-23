var tableData = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit'];
var animationRunning = true; 




function handleWordMouseOver(event) {
  const hoveredWord = event.target.textContent.trim();

  const emptyCell = Array.from(document.querySelectorAll('#tableContainer table td')).find((cell) => cell.textContent.trim() === '');

  if (emptyCell) {
    const wordExists = Array.from(document.querySelectorAll('#tableContainer table td')).some((cell) => cell.textContent.trim() === hoveredWord);

    if (wordExists) {
      emptyCell.textContent = '';
    } else {
      emptyCell.textContent = hoveredWord;
    }
  }
}





//Erstellung von DIV, NEUSTART? 
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
    stopAnimation(); //sollte Animation stoppen. Tut es nicht
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


function stopAnimation() {
  animationRunning = false; // Setze die Variable auf false, um die Animation zu stoppen
}



function createFallingWord() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const wordElement = document.createElement('div');
  wordElement.textContent = randomWord;
  wordElement.className = 'fallingWord';
  wordElement.style.left = Math.random() * (window.innerWidth - wordElement.offsetWidth) + 'px'
  document.getElementById('centralArea').appendChild(wordElement);

  const screenHeight = window.innerHeight;
  const wordHeight = wordElement.offsetHeight;
  const animationDuration = Math.random() * 5 + 2; // Random duration between 2 and 7 seconds

  let currentPosition = 0;
  let isFalling = true;

 function animateWord() {
  currentPosition += 1;
  wordElement.style.top = currentPosition + 'px';

  if (currentPosition >= screenHeight - wordHeight) {
    currentPosition = 0;
    wordElement.style.top = currentPosition + 'px';

    // Löschen des Worts aus der Zelle, wenn es den unteren Bildschirmrand erreicht
    const wordToDelete = wordElement.textContent.trim();
    const cells = Array.from(document.querySelectorAll('#tableContainer table td'));

    cells.forEach((cell) => {
      if (cell.textContent.trim() === wordToDelete) {
        cell.textContent = '';
      }
    });

    setTimeout(animateWord, Math.random() * 5000);
  } else {
    requestAnimationFrame(animateWord);
  }
}


  wordElement.addEventListener('mouseover', handleWordMouseOver); // Add mouseover event listener to the falling word

  animateWord();
}


//
function startFallingWords() 
{
  var x = Math.floor(Math.random()*5)+1; //zufällige unter, min 1 
  var y = Math.floor(Math.random()*10)+x;//zufällig oben, min x
  
  for (let i = x; i < y; i++) //macht die Schleife 9 mal, also für 9 Wörter
  {
    if (animationRunning) 
    {
    setTimeout(createFallingWord, Math.random() * 20000); // = wie weit sollen die Wörter zeitlich auseinander sein
   }
  }
}  

startFallingWords();







const tableRows = document.querySelectorAll('#tableContainer table tr');

for (let i = 0; i < tableRows.length; i++) {
  const rowData = tableData[i];
  const tableCells = tableRows[i].querySelectorAll('td');

  for (let j = 0; j < tableCells.length; j++) {
    tableCells[j].textContent = rowData[j];
  }
}



function startCountdown() {
  let remainingSeconds = 5;
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
  buttonNo.addEventListener('click', () => 
  {
    popupElement.remove();
    popup.style.display ="none";
    fallingWord.style.display="none";

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




