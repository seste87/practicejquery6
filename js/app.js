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
// document.getElementsByTagName('canvas')[0];
var context = $('canvas')[0].getContext('2d');
var $canvas = $('canvas');
var lastEvent;
var mouseDown = false;

function getRGB() {
  var red = $('#red').val();
  var green = $('#green').val();
  var blue = $('#blue').val();
  
  return "rgb(" + red + " , " + green + " , " + blue + ")";
}





// update the new color
function changeColor() {
  
  $('#newColor').css('background-color',getRGB());
  
}

// The 'on' method will make sure any new children
// of the selecter have this function bound to it.
// In this case, all new list item children of the
// control class will also be bound to this
// handler triggered by the click method.
$('.controls').on("click", "li" , function() {
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

$('#addNewColor').click(function() {
  var $newColor = $('<li></li>');
  $newColor.css('background-color', $('#newColor').css('background-color'));
  $('.controls ul').append($newColor);
  $newColor.click();
});

$canvas.mousedown(function(e) {
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if(mouseDown) {
  context.beginPath();
  context.moveTo(lastEvent.offsetX,lastEvent.offsetY);
  context.lineTo(e.offsetX,e.offsetY);
  context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
  }
}).mouseup(function() {
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

