$.ajax({
  type: 'GET',
  url: 'http://dev.univfeed.com/api/schools?callback=test',
  // data to be added to query string:
  // type of data we are expecting in return:
  dataType: 'json',
  timeout: 300,
  context: $('body'),
  success: function(data){
    // Supposing this JSON payload was received:
    //   {"project": {"id": 42, "html": "<div>..." }}
    // append the HTML to context object.
    alert(data);
  },
  error: function(xhr, type){
    alert('Ajax error!')
  }
})
