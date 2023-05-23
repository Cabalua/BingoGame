In diesem Code wurde die Funktion handleWordClick hinzugefügt, die aufgerufen wird, wenn das herunterfallende Wort angeklickt wird. Sie überprüft, ob es eine leere Zelle in der Tabelle gibt, und wenn ja, füllt sie diese mit dem angeklickten Wort.

Darüber hinaus werden Event Listener für das Klicken auf das herunterfallende Wort hinzugefügt, um die Funktion handleWordClick aufzurufen, wenn das Wort mit der Maus berührt wird.

Stellen Sie sicher, dass Sie diesen aktualisierten Code nach dem Code für das Erzeugen der herunterfallenden Wörter und vor dem Event Listener für das DOMContentLoaded-Ereignis platzieren.




// Funktion zur Behandlung des Klicks auf das herunterfallende Wort
function handleWordClick(event) {
  const clickedWord = event.target.textContent.trim();

  const emptyCell = Array.from(tableCells).find((cell) => cell.textContent.trim() === '');

  if (emptyCell) {
    emptyCell.textContent = clickedWord;
  }
}

// ...

document.addEventListener('DOMContentLoaded', () => {
  // ...

  tableCells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      const word = cell.textContent.trim();

      if (word === '') {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        cell.textContent = randomWord;
      }
    });
  });

  // Event Listener für das Klicken auf das herunterfallende Wort
  const fallingWords = document.querySelectorAll('.falling-word');
  fallingWords.forEach((word) => {
    word.addEventListener('click', handleWordClick);
  });
});
