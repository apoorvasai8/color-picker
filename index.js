let input = document.getElementById("color-input");
let getColorButton = document.getElementById("button");
getColorButton.addEventListener("click", function (event) {
  document.getElementById("hexspan").textContent = input.value;

  function hexToRgb(hex) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, "");

    // Parse the r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgb(${r}, ${g}, ${b})`;
  }
  document.getElementById("rgbspan").textContent = hexToRgb(input.value);

  document.body.style.background = input.value;
});
