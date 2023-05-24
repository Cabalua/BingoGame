In der Funktion `animateWord()`, nachdem du die Position des Wortes aktualisiert hast, kannst du eine Überprüfung vornehmen, ob das Wort den unteren Bildschirmrand erreicht hat. Wenn ja, kannst du überprüfen, ob das Wort bereits in der Tabelle vorhanden ist. Wenn es vorhanden ist, entferne es aus der Tabelle.

Hier ist der aktualisierte Codeausschnitt:

```javascript
function animateWord() {
  currentPosition += 1;
  
  wordElement.style.top = currentPosition + 'px';

  if (currentPosition >= screenHeight) {
    const tableCells = document.querySelectorAll('#tableContainer table td');
    const wordText = wordElement.textContent.trim();

    for (let i = 0; i < tableCells.length; i++) {
      if (tableCells[i].textContent.trim() === wordText) {
        tableCells[i].textContent = '';
        break;
      }
    }

    wordElement.remove();
  } else {
    requestAnimationFrame(animateWord);
  }
}
```

In diesem aktualisierten Codeausschnitt wird überprüft, ob das Wort den unteren Bildschirmrand erreicht hat (`if (currentPosition >= screenHeight)`). Wenn dies der Fall ist, wird der Text des Worts abgerufen und mit den Texten in den Tabellenzellen verglichen. Wenn eine Übereinstimmung gefunden wird, wird der Text in der entsprechenden Tabellenzelle geleert (`tableCells[i].textContent = '';`). Anschließend wird das Wort aus dem DOM entfernt (`wordElement.remove()`).

Durch diese Änderung wird ein Wort, das den unteren Bildschirmrand erreicht und bereits in der Tabelle vorhanden ist, aus der Tabelle gelöscht.

Hinweis: Stelle sicher, dass die CSS-Klasse `.falling-word` in deinem CSS-Code definiert ist, da sie im Codeausschnitt verwendet wird.