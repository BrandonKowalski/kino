var v = [];
var loadVine = function() {  
  $.ajax({
    type: 'GET',
    url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%22https%3A%2F%2Fvine.co%2Fv%2FhWP0FJKKBvK%22%20and%20xpath%3D'%2Fhtml%2Fhead%2Fmeta'&format=json&diagnostics=true",
    dataType: 'jsonp',
    success: function(data){
      v.push(data);
    },
    error: function(xhr, type){
      alert('Ajax error!')
    }
  });
}
