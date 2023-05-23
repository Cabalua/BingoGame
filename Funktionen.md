Funktionen
- **stopAnimation** setzt V animationRunning auf False
- **createFallingWord** erstellt fallende wörter; 
- **handleWordMouseOver** macht 
- 





<!DOCTYPE html>
<html>
<head>
  <title>Leerer Bildschirm mit JavaScript</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }

    #centeredDiv {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    #centeredDiv span {
      font-size: 48px;
    }
  </style>
</head>
<body>
  <script>
    window.onload = function() {
      document.body.innerHTML = '<div id="centeredDiv"><span id="number"></span></div>';

      // Setze die Zahl
      var zahl = 42;
      document.getElementById('number').innerText = zahl;
    };
  </script>
</body>
</html>


---



<!DOCTYPE html>
<html>
<head>
  <title>Leerer Bildschirm mit JavaScript</title>
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: hidden;
    }

    #centeredDiv {
      display: none;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    #centeredDiv span {
      font-size: 48px;
    }
  </style>
</head>
<body>
  <button id="clearButton">Leeren</button>

  <div id="existingElements">
    <!-- Hier kommen die bereits vorhandenen Elemente hin -->
    <p>Beispielinhalt 1</p>
    <p>Beispielinhalt 2</p>
    <p>Beispielinhalt 3</p>
  </div>

  <div id="centeredDiv">
    <span id="number"></span>
  </div>

  <script src="script.js"></script>
</body>
</html>

```js
window.onload = function() {
  var clearButton = document.getElementById('clearButton');
  var existingElements = document.getElementById('existingElements');
  var centeredDiv = document.getElementById('centeredDiv');
  var numberSpan = document.getElementById('number');

  clearButton.addEventListener('click', function() {
    // Verstecke vorhandene Elemente
    existingElements.style.display = 'none';

    // Zeige das zentrierte DIV an
    centeredDiv.style.display = 'flex';

    // Setze die Zahl
    var zahl = 42;
    numberSpan.innerText = zahl;
  });
};

```
