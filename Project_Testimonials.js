(function(){

  var testimonials =[
    { testimonial: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed ",
      author: "John Lennon"
    },
    { testimonial: "Lorem kdmkfdfldf dmfldmfldfld,fld,fd,f dmf dlkfmlkd,fld,fld,c",
      author: "Narang"
    },
    { testimonial: "Lorem ipsum dolor sit amet, consectetur ",
      author: "Einstein"
    }
  ]

  var buttons = $('.btn')
  var test = $('#Context')
  var author = $('#Person')
  var counter = 0

  buttons.each(function(button){
    $(this).on('click',function(){

      if($(this).hasClass('btn-left')){
        counter--
        if(counter < 0){
          counter = testimonials.length -1
        }
        test.text(testimonials[counter].testimonial)
        author.text(testimonials[counter].author)
      }

      if($(this).hasClass('btn-right')){
        counter++
        if(counter > testimonials.length -1){
          counter = 0
        }
        test.text(testimonials[counter].testimonial)
        author.text(testimonials[counter].author)

      }
    })
  })





})()
