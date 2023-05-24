var tableData = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit'];
var animationRunning = true; 


// scheinbar ohne funktion?
// function stopAnimation() {
//   animationRunning = false; // Setze die Variable auf false, um die Animation zu stoppen
// }



//wie viele 
// function startFallingWords() {
//   var x = Math.floor(Math.random() * 5) + 5; // Random number of words to create, minimum 1; hat aber scheinbar keine Wirkung ich kann die hintere Zahl auf 200 hoch tun, und es ist egal. ABER das ist doch auch eher der x Wert, also wo 
//   var y = Math.floor(Math.random() * 10) + x; // Random number of words to create above x



//   const fallingInterval = setInterval(() => 
//   {
//     for (let i = x; i < y; i++) 
//     {
//       createFallingWord();
//     }

//   }, 2000); //Intervall: welches? 

// setTimeout(() => 
//   {
//     clearInterval(fallingInterval);
//   }, 10000);
// }

// // daran liegt es. If animation running. V-if weg: NEIN. 
//     // if (animationRunning) { 
//       setTimeout(createFallingWord, Math.random() * 2); // Time delay between words falling; 20000 bei 2 alle gleichzeitig und dann nix mehr?
//     // }
//   }
// }


function startFallingWords() 
{
  var x = Math.floor(Math.random() * 5) + 5;
  var y = Math.floor(Math.random() * 10) + x;

  const fallingInterval = setInterval(() => 
  {
    for (let i = x; i < y; i++) 
    {
      createFallingWord();
    }

  }, 500); // Adjust the interval duration as desired

  // Stop the falling words after a certain time
  setTimeout(() => {
    clearInterval(fallingInterval);
  }, 10000); // Adjust the duration as desired
}


function handleWordMouseOver(event) {
  const hoveredWord = event.target.textContent.trim();

  const emptyCell = Array.from(document.querySelectorAll('#tableContainer table td')).find(
    (cell) => cell.textContent.trim() === ''
  );

  if (emptyCell) {
    const wordExists = Array.from(document.querySelectorAll('#tableContainer table td')).some(
      (cell) => cell.textContent.trim() === hoveredWord
    );

    if (wordExists) {
      emptyCell.textContent = '';
    } else {
      emptyCell.textContent = hoveredWord;
    }

    event.target.remove(); // Remove the word when it is placed in a table cell
  }
}


function createFallingWord() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const wordElement = document.createElement('div'); //°1 wenn hier kein div sondern ein span? Würde dann die Fläche des Wortes kleiner werden? 
  wordElement.textContent = randomWord; //Text
  wordElement.className = 'falling-word';
  wordElement.style.left = Math.random() * (window.innerWidth - wordElement.offsetWidth) + 'px';
  document.getElementById('centralArea').appendChild(wordElement);

  const screenHeight = window.innerHeight;
  const wordHeight = wordElement.offsetHeight;

  let currentPosition = -wordHeight; // Start position above the screen
  const randomPosition = Math.random() * (screenHeight - wordHeight);

  wordElement.style.top = currentPosition + 'px';

  const animationDuration = Math.random() * 5 + 2; // Random duration between 2 and 7 seconds

  function animateWord() {
    currentPosition += 1;
    wordElement.style.top = currentPosition + 'px';

    if (currentPosition >= screenHeight) {
      const tableCells = document.querySelectorAll("#tableContainer table td");
      const wordText = wordElement.textContent.trim();


      for (let i = 0; i < tableCells.length; i++) {
      if (tableCells[i].textContent.trim() === wordText) {
        tableCells[i].textContent = '';
        break;
      }
    }



      wordElement.remove(); // Remove the word when it reaches the bottom of the screen
    } else {
      requestAnimationFrame(animateWord);
    }
  }

  wordElement.addEventListener('mouseover', handleWordMouseOver); // Add mouseover event listener to the falling word

  animateWord();
}

startFallingWords(); //es ist scheinbar egal, wo das Aufrufen der F steht? Aber sie müsste doch in einer Art, Delta? Also dass dieser Aufruf alle so und so viel Sekunden; zufällig halt, wieder aufgerufen wird. 



const tableRows = document.querySelectorAll('#tableContainer table tr');

for (let i = 0; i < tableRows.length; i++) {
  const rowData = tableData[i];
  const tableCells = tableRows[i].querySelectorAll('td');

  for (let j = 0; j < tableCells.length; j++) {
    tableCells[j].textContent = rowData[j];
  }
}


//COUNTDOWN
function startCountdown() {
  let remainingSeconds = 10;
  const countdownElement = document.getElementById('countdown');

  const countdownInterval = setInterval(() => {
    remainingSeconds--;
    countdownElement.textContent = remainingSeconds;

    if (remainingSeconds === 0) {
      clearInterval(countdownInterval);
      showPlayAgainPopup();
    }
  }, 1000); //1000 = Interval 1 sec, 2000 = 2 sec ... 
}



function showPlayAgainPopup() {
  const popupElement = document.createElement('div');
  popupElement.className = 'popup';
  popupElement.textContent = 'Nochmal spielen?';

  const buttonYes = document.createElement('button');
  buttonYes.textContent = 'Ja';
  buttonYes.addEventListener('click', () => {
    popupElement.remove(); //funktioniert nur beim zweiten mal Klicken
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

  //das erstellt die Elemente dann erst
  popupElement.appendChild(buttonYes);
  popupElement.appendChild(buttonNo);
  document.body.appendChild(popupElement);
}


//reset = leeren der Tabelle, Neustart des Countdwons
function resetGame() {
  // Hier kannst du die erforderlichen Aktionen ausführen, um das Spiel zurückzusetzen und erneut zu starten.
  // Zum Beispiel: Leeren der Tabelle, Neustart des Countdowns usw.
  const tableCells = document.querySelectorAll('#tableContainer table td');
  tableCells.forEach((cell) => {
    cell.textContent = '';
  });

  startCountdown();
}


//Countdown zu Beginn. Da wird auch der Neustart davon abhängig sein. 
document.addEventListener('DOMContentLoaded', () => {
  startCountdown();
});


