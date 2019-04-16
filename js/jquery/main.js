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
    get
  },
  category:function(){
    getCategory()
  }
}
function getCategory(){
  var phrase=window.location.hash.substring(window.location.hash.indexOf("/"));
  var toSearch="";
  var pageCounter=0;
  if(phrase.split("/").length>2&&isInteger(parseInt(phrase.split("/")[2]))&&parseInt(phrase.split("/")[2])>0){
    pageCounter=parseInt(phrase.split("/")[2]);
  }
  if(phrase.indexOf("/")>0){
    toSearch=decodeURI(urphrase.substring(0, phrase.indexOf("/")));
    $.ajax({
      method:"POST",
      url:generalSettings.apiAddress+"/api/getlist.php?site=sett%20sarverott%20site",
      data:{
        category:decodeURI(phrase.split("/")[1]),
        page:pageCounter
      }
    }).then(function(data){
      console.log(data);
      var d=JSON.parse(data);
      jquerySearchResultsHook.data.searchResult=d.result;
    });
  }else{

    $.ajax({
      method:"POST",
      url:generalSettings.apiAddress+"/api/getlist?site=sett%20sarverott%20site",
      data:{
        page:pageCounter
      }
    }).then(function(data){
      console.log(data);
      var d=JSON.parse(data);
      jquerySearchResultsHook.data.searchResult=d.result;
    });
  }
}
function getDocument(){
  var id=window.location.hash.substring(window.location.hash.indexOf("/"));
  var toSearch="";
  //if(parseInt(id)+""!="NaN"){
    $.ajax({
      method:"POST",
      url:generalSettings.apiAddress+"/api/getdoc.php?site=sarverott",
      data:{
        id:parseInt(id)
      }
    }).then(function(data){
      console.log(data);
      var d=JSON.parse(data);
      for(var i in d.result){
          jqueryDocsDisplayHook.data[i]=d.result[i];
      }
    });
  //}
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
function displayCard(idx){
  console.log(idx);
    if(actionController.hasOwnProperty(idx)){
      actionController[idx]();
    }
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
