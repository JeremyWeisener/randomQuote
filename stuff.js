var colors = ["#F44336", "#EC407A", "#AB47BC", "#7E57C2", "#5C6BC0", "#42A5F5", "#29B6F6", "#26C6DA", "#26A69A", "#66BB6A", "#9CCC65", "#FFEE58", "#FFA726"];

var response;
$('#randQuote').click(function() {
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);
    console.log(response);
});

function update(response) {
  $('span#quoteText').html(" " + JSON.stringify(response.quoteText).replace(/["]+/g,""));
  $('#author').html(JSON.stringify(response.quoteAuthor));
    console.log(response);
    console.log(response.quoteText);
  
  $('#twitter').attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURI(JSON.stringify(response.quoteText)) + " -" + encodeURI(JSON.stringify(response.quoteAuthor).replace(/["]+/g,"")));
  
  var changeColor = colors[Math.floor(Math.random() * colors.length)];
  
  $('body,#twitter,#randQuote').animate({backgroundColor: changeColor});
 $('#display').animate({color: changeColor});
  
  
  //$('body').attr("background", colors[Math.floor(Math.random() * colors.length)]);
  
  
  
  /**$('#display').prepend('<pre>' + $('#response').html() + '</pre>');
  $('#response').html(JSON.stringify(response));**/
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}

