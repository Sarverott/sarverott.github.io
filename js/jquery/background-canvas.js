$(document).ready(function(){
  $(window).resize(function(){
    canvasFitting();
  });
  canvasFitting();
  var tmpCanvasConfig=vm._data.backgroundAnimation
  animationControll.createTheater(tmpCanvasConfig.id, tmpCanvasConfig.animationId, tmpCanvasConfig.intervalTime);
  animationControll.getTheater(tmpCanvasConfig.id).startAnimation();
});
function canvasFitting(){
  //document.getElementsByClassName('background-canvas')[0].width=$(window).width();
  //document.getElementsByClassName('background-canvas')[0].height=$(window).height();
  $('.background-canvas').width($(window).width());
  $('.background-canvas').height($(window).height());
}
loadNext();
