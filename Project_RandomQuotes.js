(function() {

  var quotes = [
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Get busy living or get busy dying.",
      author: "Stephen King"
    },
    {
      quote: "Those who dare to fail miserably can achieve greatly.",
      author: "John F. Kennedy"
    },
    {
      quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",
      author: "Leonardo Da Vinci"
    },
    {
      quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
      author: "Albert Einstein"
    }
  ]


  var btn = $('#btn')

  btn.on('click',changeQuote)

  function changeQuote(){
    var rand = Math.floor(Math.random()*quotes.length)
    $('#quote').text(quotes[rand].quote)
    $('#author').text(quotes[rand].author)
  }

})()
