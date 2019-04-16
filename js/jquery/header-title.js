function titleAnimation(){
  var i=0;
  var tmpStr=vm._data.layout.header.title;
  var firstInterval=setInterval(function(){
    titleAnimationFrame(i++,tmpStr,8);
    if(i>5+tmpStr.length){
      clearInterval(firstInterval);
      setInterval(function(){
        titleAnimationFrame(i++,tmpStr,1);
      },400);
    }
  },50);
}

function titleAnimationFrame(frame, content, divide){
  if(frame<5){
    $(".title h1").html("");
    if(divide>frame%(divide*2)){
      $(".title h1").append("_");
    }else{
      $(".title h1").append("&nbsp;");
    }
  }else if(frame==5){
    $(".title h1").html("");
    $(".title h1").append(
      $("<span>").addClass("title-content")
    ).append(
      $("<span>").addClass("title-floor")
    );
  }else{
    if(frame<5+content.length){
      $(".title-content").append(content.substring(frame-6,frame-5));
    }
    if(divide>frame%(divide*2)){
      $(".title-floor").html("_");
    }else{
      $(".title-floor").html("&nbsp;");
    }
  }
  /*
  if(frame<5){
    $(".title h1").html("");
  }else if(frame>5+content.length){
    $(".title h1").html(content);
  }else{
    $(".title h1").html(content.substring(0,frame-5));
  }
  if(divide>frame%(divide*2)){
    $(".title h1").append("_");
  }else{
    $(".title h1").append("&nbsp;");
  }
  */
}

$(document).ready(function(){
  titleAnimation();
});
loadNext();
