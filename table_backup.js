var tableData = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit'];


// // Berechnung der Anzahl der ausgefüllten Felder
// function countFilledFields() {
//   var count = 0;
//   for (var i = 0; i < tableData.length; i++) {
//     for (var j = 0; j < tableData[i].length; j++) {
//       if (tableData[i][j] !== '') {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// // Beispielaufruf der Funktionen
// fillField(0, 0); // Fülle das Feld in der ersten Zeile, ersten Spalte
// fillField(1, 1); // Fülle das Feld in der zweiten Zeile, zweiten Spalte
// fillField(2, 2); // Fülle das Feld in der dritten Zeile, dritten Spalte



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



   function startFallingWords() {
      for (let i = 0; i < 9; i++) {
        setTimeout(createFallingWord, Math.random() * 5000); // Starten Sie das Erzeugen von fallenden Wörtern mit zufälligen Verzögerungen
      }
    }

    startFallingWords();



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


document.addEventListener('DOMContentLoaded', () => {
  const words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit'];
  const tableCells = document.querySelectorAll('td');

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

    });
  });
});