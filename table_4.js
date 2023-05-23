var tableData = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

const words = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Fig', 'Grape', 'Honeydew', 'Jackfruit'];

function createFallingWord() {
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

  wordElement.addEventListener('click', handleWordClick); // Add click event listener to the falling word

  animateWord();
}

function startFallingWords() {
  for (let i = 0; i < 9; i++) {
    setTimeout(createFallingWord, Math.random() * 5000); // Start creating falling words with random delays
  }
}

startFallingWords();

function handleWordClick(event) {
  const clickedWord = event.target.textContent.trim();

  const emptyCell = Array.from(document.querySelectorAll('#tableContainer table td')).find((cell) => cell.textContent.trim() === '');

  if (emptyCell) {
    emptyCell.textContent = clickedWord;
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
  const tableCells = document.querySelectorAll('#tableContainer table td');

  tableCells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      const word = cell.textContent.trim();

      if (word === '') {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        cell.textContent = randomWord;
      }
    });
  });

  const fallingWords = document.querySelectorAll('.falling-word');
  fallingWords.forEach((word) => {
    word.addEventListener('click', handleWordClick);
  });
});
