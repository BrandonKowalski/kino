var loadVine = function() {  
  var v = $.ajax({
    type: 'GET',
    url: 'http://dev.univfeed.com/api/schools',
    dataType: 'jsonp',
    success: function(data){
      return data;
    },
    error: function(xhr, type){
      alert('Ajax error!')
    }
  });
  console.log('v' + JSON.stringify(v));
  return v;
}
