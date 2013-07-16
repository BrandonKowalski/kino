var v = [];
var loadVine = function() {  
  $.ajax({
    type: 'GET',
    url: 'http://dev.univfeed.com/api/schools',
    dataType: 'jsonp',
    success: function(data){
      v.push(data);
    },
    error: function(xhr, type){
      alert('Ajax error!')
    }
  });
}
