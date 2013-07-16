var loadVine = function() {  
  var v = $.ajax({
    type: 'GET',
    url: 'http://dev.univfeed.com/api/schools',
    dataType: 'jsonp',
    success: function(data){
      console.log(JSON.stringify(data));
      return data;
    },
    error: function(xhr, type){
      alert('Ajax error!')
    }
  });
  return v;
}
