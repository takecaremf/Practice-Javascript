<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Toggle Button</title>
</head>
<body>
  <button id="toggle-button">Open</button>
  
  <script>
    // Get a reference to the button element
    var toggleButton = document.getElementById("toggle-button");

    // Function to handle button click event
    function handleButtonClick() {
      if (toggleButton.textContent === "Open") {
        toggleButton.textContent = "Close";
        // Add code here for actions when the button is open
      } else {
        toggleButton.textContent = "Open";
        // Add code here for actions when the button is closed
      }
    }

    // Attach the handleButtonClick function to the button's click event
    toggleButton.addEventListener("click", handleButtonClick);
  </script>
</body>
</html>