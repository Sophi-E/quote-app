//jshint esversion:6
$(document).ready(function () {

    $('.new-quote').click(function () {

    const URL = 'https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en';

    $.getJSON(URL, function (data) {

      let quote = data.quoteText;
      let author = data.quoteAuthor;

      $('#quote').text(quote);

      if (author === '') {
            $('#author').text('~ Unknown');
        } else {
            $('#author').text('~'+ author);
        }
        console.log(author)



    });

    });
});
