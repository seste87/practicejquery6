// No user interation causes any change to app
// Solution: when user interacts, app responds

// When clicking on control list items,
// deselect sibling elements and then select 
// clicked element

// WHen new color is clicked, we want to show 
// or hide the color select 

// We want to attach the color sliders to the
// new color span

// When add color is pressed, we want to append the
// color to the controls

// On mouse events on the canvas, draw lines

var color = $('.selected').css('background-color');

var red = $('#red').val();
var green = $('#green').val();
var blue = $('#blue').val();

function getRGB() {
  red = $('#red').val();
  green = $('#green').val();
  blue = $('#blue').val();
  
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

// update the new color
function changeColor() {
  
  $('#newColor').css('background-color',getRGB());
  
}

$('.controls li').click(function() {
  // remove selected from all other list items
  $(this).siblings().removeClass('selected');
  // add selected to this list item
  $(this).addClass('selected');
  // cache the selected background color
  color = $(this).css('background-color');
});



$('#revealColorSelect').click(function () {
    
    changeColor();
    $('#colorSelect').toggle();
    
  });
  
$("input[type=range]").change(changeColor);

$('#addNewColor').click(function() {
  $('.selected').css('background-color', getRGB());
  $('#colorSelect').hide();
  
});
  

