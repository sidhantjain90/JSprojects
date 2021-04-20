(function(){

  var pictures = [
    "unsplash1",
    "unsplash2",
    "unsplash3",
    "unsplash4"
  ];
  var buttons = $('.btn')
  var image = $('.img-container')
  let counter = 0

  buttons.each(function(button){
    $(this).on('click',function(){

      if($(this).hasClass('btn-left')){
        counter --
        if(counter < 0){
          counter = pictures.length - 1
        }
        image.css('background-image',"url(../JSprojects/img/"+pictures[counter]+".jpg)")
      }

      if($(this).hasClass('btn-right')){
        counter++
        if(counter > pictures.length -1){
          counter = 0
        }
        image.css('background-image',"url(../JSprojects/img/"+pictures[counter]+".jpg)")
      }

    })
  })
})()
