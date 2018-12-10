$(window).on('hashchange', function(e){
  window.location.hash;
});
$(document).ready(function(){

});
function getPosts(dataObj){
  dataObj.apiKey="";
  $.ajax({
    method:"POST",
    url:"/api/getpost?",
    data:dataObj
  }).then(function(data){
    var d=JSON.parse(data);
    return d;
  });
}
loadNext();
