(function(){

  // Grabbing the message box by id
  var message = $('#message');
  var submit = $('#Btn');

  submit.on('click',function(e){

    e.preventDefault();

    if(message.value === ''){
      $('h2').text('Enter Text');   // Not working!
    }else{
      $('h2').text('Message Delivered!');
    }

    // Clear the input area after submit
    message.val('');

  })

})()
