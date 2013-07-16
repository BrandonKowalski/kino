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
  console.log('v' + JSON.stringify(data));
  return v;
}
