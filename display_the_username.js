<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Name Display</title>
</head>
<body>
  <label for="name-input">Enter your name:</label>
  <input type="text" id="name-input">
  <div id="name-display">Hello</div>
  
  <script>
    // Get references to the input and display elements
    var nameInput = document.getElementById("name-input");
    var nameDisplay = document.getElementById("name-display");

    // Function to update the display with the entered name
    function updateNameDisplay() {
      var name = nameInput.value;
      nameDisplay.textContent = "Hello, " + name + ".";
    }

    // Event listener to trigger the update when the input value changes
    nameInput.addEventListener("input", updateNameDisplay);
  </script>
</body>
</html>