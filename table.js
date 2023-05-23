var tableData = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit'];



//Fallende Wörter erzeugen: 

function createFallingWord() 
{
  // const words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit'];
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const wordElement = document.createElement('div');
  wordElement.textContent = randomWord;
  wordElement.className = 'falling-word';
  wordElement.style.left = Math.random() * 100 + '%';
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
          setTimeout(animateWord, Math.random() * 5000); // Random delay between 0 and 5 seconds before the word starts falling again
        } else {
          requestAnimationFrame(animateWord);
        }
      }

      animateWord();
}


//fallende Wörter starten

function startFallingWords() 
{
      for (let i = 0; i < 9; i++) 
      {
        setTimeout(createFallingWord, Math.random() * 5000); // Starten Sie das Erzeugen von fallenden Wörtern mit zufälligen Verzögerungen
      }
}

startFallingWords();

//neu hinzu gefügt:
// bei Klick -> was tun? 
function handleWordClick(event) {
  const clickedWord = event.target.textContent.trim();

  const emptyCell = Array.from(tableCells).find((cell) => cell.textContent.trim() === '');

  if (emptyCell) {
    emptyCell.textContent = clickedWord;
  }
}






// Feld ausfüllen

function fillField(row, column) {
  const cell = document.querySelector(`#tableContainer table tr:nth-child(${row + 1}) td:nth-child(${column + 1})`);
  const word = cell.textContent.trim();

  if (word === '') {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    cell.textContent = randomWord;

    // Hier können Sie weitere Aktionen ausführen, wenn ein Feld ausgefüllt wurde
  }
}




const tableRows = document.querySelectorAll('#tableContainer table tr');

for (let i = 0; i < tableRows.length; i++) {
  const rowData = tableData[i];
  const tableCells = tableRows[i].querySelectorAll('td');

  for (let j = 0; j < tableCells.length; j++) {
    tableCells[j].textContent = rowData[j];
  }
}




//das muss im Event-Listener irgendwo drin sein. 

document.addEventListener('DOMContentLoaded', () => {
  
  // const raus genommen; weil oben bereits drin. Braucht es hier nicht
  // const words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit'];
  // const tableCells = document.querySelectorAll('td');

  tableCells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      const word = cell.textContent.trim();

      if (word === '') {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        cell.textContent = randomWord;
      }
      tableCells.forEach((cell) => {
  cell.addEventListener('mouseover', () => {
    const word = cell.textContent.trim();

    if (word === '') {
      fillField(cell.parentElement.rowIndex, cell.cellIndex);
    }
  });
});
// neu hinzu gefügt
// Event Listener für das Klicken auf das herunterfallende Wort
  const fallingWords = document.querySelectorAll('.falling-word');
  fallingWords.forEach((word) => {
    word.addEventListener('click', handleWordClick);
  });
});

});
});
