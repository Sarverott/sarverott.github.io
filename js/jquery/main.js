$(window).on('hashchange', function(e){
  hashChangeEvent();
});
$(document).ready(function(){
  hashChangeEvent(false);
  try{
    base64encrypt(JSON.parse(getStatData()));
  }catch(e){
    null
  }
});
var jquerySearchResultsHook=null;
var jqueryDocsDisplayHook=null;
var actionController={
  docs:function(){

  },
  category:function(category, page=0){
    $.ajax({
      url: generalSettings.apiAddress+"api/getlist.php?site=sett%20sarverott%20site",
      method: "POST",
      data: {category,page}
    }).done(function(msg){
      console.log(msg);
    });
  }
}
function searchInDatabase(){
  var phrase=window.location.hash.substring(window.location.hash.indexOf("/"));
  var toSearch="";
  if(phrase.indexOf("/")>0){
    toSearch=decodeURI(urphrase.substring(0, phrase.indexOf("/")));
    $.ajax({
      method:"POST",
      url:generalSettings.apiAddress+"/api/getlist?site=sarverott&search",
      data:{
        phrase:toSearch
      }
    }).then(function(data){
      var d=JSON.parse(data);
      jquerySearchResultsHook.data.searchResult=d.result;
    });
  }else{
    $.ajax({
      method:"POST",
      url:generalSettings.apiAddress+"/api/getlist?site=sarverott",
      data:{
        page:toSearch
      }
    }).then(function(data){
      var d=JSON.parse(data);
      jquerySearchResultsHook.data.searchResult=d.result;
    });
  }
}
function getDocument(){
  var id=window.location.hash.substring(window.location.hash.indexOf("/"));
  var toSearch="";
  if(parseInt(id)+""!="NaN"){
    $.ajax({
      method:"POST",
      url:generalSettings.apiAddress+"/api/getdoc.php?site=sarverott",
      data:{
        id:parseInt(id)
      }
    }).then(function(data){
      var d=JSON.parse(data);
      for(var i in d.result){
          jqueryDocsDisplayHook.data[i]=d.result[i];
      }
    });
  }
}
function hashChangeEvent(init=true){
  generalSettings.localization=window.location.hash;
  var loc=generalSettings.localization.substring(1, generalSettings.localization.indexOf("/"));
  if(typeof(localizationsSettings.places[loc])!="undefined"){
    displayCard(loc);
    backgroundSettings.animationId=localizationsSettings.places[loc].animationId;
    backgroundSettings.intervalTime=localizationsSettings.places[loc].animationIntervalTime;
  }else if(window.location.hash=="#"||window.location.hash==""){
    displayCard("_index_");
    backgroundSettings.animationId=localizationsSettings.places["_index_"].animationId;
    backgroundSettings.intervalTime=localizationsSettings.places["_index_"].animationIntervalTime;
  }else{
    displayCard("_unknown_");
    backgroundSettings.animationId=localizationsSettings.places["_unknown_"].animationId;
    backgroundSettings.intervalTime=localizationsSettings.places["_unknown_"].animationIntervalTime;
  }
  if(init){
    changeBackground();
  }
}
function changeCard(cardName){

}
function getStatData(){
  return {
    browser:getBrowserName,
    platform:navigator.platform
  };
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
function displayCard(idx){
  console.log(idx);

  $('.card-item').each(function(index, element){
    //console.log(element)
    if(idx==$(element).attr("card-index")){
      $(element).show();
    }else{
      $(element).hide();
    }
  })
}
loadNext();
