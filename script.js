$(document).ready(function () {
    const URL = 'https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en';

    $.getJSON(URL, function (data) {
        console.log(data);
    });

});
