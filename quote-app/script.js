//jshint esversion:6
  $(document).ready(function () {

    $('.new-quote').click(quote);

    function quote() {
        const URL = 'https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en';

            $.getJSON(URL, function (data) {

                console.log(data);

                let quote = data.quoteText;
                let author = data.quoteAuthor;

                $('#quote').text(quote);

                if (author === '') {
                    $('#author').text('~Unknown');
                } else {
                    $('#author').text('~' + author);
                }
                $('.tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(quote + '- '+ author));


            });
        }

        quote();


});
