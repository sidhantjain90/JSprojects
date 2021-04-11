// Defining and initializing the variables
//var body = $('body')
var btn = $('#btn')
var colors = ['red', 'blue', 'green', 'orange']

//$('body').css()

//Button click connected to the function
btn.on('click',changeBackground)

// Function to change color
function changeBackground(){
  var colorIndex = parseInt(Math.random()*colors.length);
  $('body').css('background-color', colors[colorIndex]);
}
