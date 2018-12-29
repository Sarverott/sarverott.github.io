$(window).on('hashchange', function(e){
  hashChangeEvent();
});
$(document).ready(function(){
  hashChangeEvent(false);
});
function hashChangeEvent(init=true){
  generalSettings.localization=window.location.hash;
  switch(generalSettings.localization){
    case "#squa":
      backgroundSettings.animationId="squarePatternShades";
    //  backgroundSettings.id="background-animation-main-theme";
      backgroundSettings.intervalTime=50;
    break;
    default:
      backgroundSettings.animationId="redlinesInTheDarkness";
    //  backgroundSettings.id="background-animation-main-theme";
      backgroundSettings.intervalTime=70;
  }
  if(init){
    changeBackground();
  }
}
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
