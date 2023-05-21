// HARD: Create two buttons, one that when clicked turns the background of the body red.
// The other, when clicked, turns the body's background color white.
// Each of the background colors should be defined as class styles and when the
// buttons are pushed the body's classList is updated to include the correct class for the background.
// Create a single function that takes an input className and updates the body's classList to ONLY include that className

// Create classes called red and white in CSS and give them a background color to match
// Add onclick="changeColor()" functino to button elements in html
// For red button add 'red' as the argument and for the white button 'white'

// backColor is the peramiter representing the background color/class name for that button's background color
function changeColor(backColor) {
  // Inside the function, we will assign any element attached to it a class name with that permaiter of backColor
  // so, when clicked, the background color will change to the corresponding color when assigned that class name. 
  document.body.className = backColor;
}
