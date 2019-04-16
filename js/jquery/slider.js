/*
function sizingVideo(){
  if($(".main-slider-item-background").width()/426<$(".main-slider-item-background").height()/240){
    $(".main-slider-item-video").width($(".main-slider-item-background").height()/240*426+20);
    $(".main-slider-item-video").height($(".main-slider-item-background").height()+20);
  }else{
    $(".main-slider-item-video").height($(".main-slider-item-background").width()*240/426+20);
    $(".main-slider-item-video").width($(".main-slider-item-background").width()+20);
  }
}
$(document).ready(function(){
  sizingMainHello();
	sliderGlobalInterval.count=0;
  //sliderSwitchFunct(2);
	sliderGlobalInterval.obj=setInterval(function(){
		sliderSwitchFunct(sliderGlobalInterval.count++);
		console.log(sliderGlobalInterval.count);
	},5000);
});
$(window).resize(function(){
	sizingMainHello();
});
function sizingMainHello(){
	var wid=$("body").width();
	if($(window).width()<902){
		document.getElementById("sett-painting").width=wid-10;
		document.getElementById("sett-painting").height=500;
		$("#main-slider").css({"width":"100%","height":Math.round($(window).height()-110)+"px"});
	}else{
		document.getElementById("sett-painting").width=450;
    if($(window).height()-110>410){
      document.getElementById("sett-painting").height=$(window).height()-110;
  		$("#main-slider").css({"width":(wid-460)+"px","height":Math.round($(window).height()-110)+"px"});
    }else{
      document.getElementById("sett-painting").height=410;
  		$("#main-slider").css({"width":(wid-460)+"px","height":"410px"});
    }
	}
  sizingVideo();
}
function sliderSwitchFunct(index){
  $(".main-slider-item").filter("[data-activation=active]").data("activation","none")
	$(".main-slider-item").each(function(i){
		if($(this).data("index")==(index+1)%$(".main-slider-item").length) {
			$(this).removeClass("smooth-out-slide").addClass("hard-in-slide");
		}else if($(this).data("index")==index%$(".main-slider-item").length){
			$(this).removeClass("hard-in-slide").addClass("smooth-out-slide");
		}
	})
}
*/

$(document).ready(function(){
  var sliderIndex=0;
  $(".main-slider-item:nth-of-type(1)")
    .addClass("middle-pos");
  //console.log($(".main-slider-item"));
  //console.log((sliderIndex++)%$(".main-slider-item").length);
  //console.log($(".main-slider-item").addClass("animate"));
  setInterval(function(){
    var hide=(sliderIndex++)%$(".main-slider-item").length;
    var show=sliderIndex%$(".main-slider-item").length;
    $(".main-slider-item:nth-of-type("+(show+1)+")")
      .removeClass("animate-me")
      .removeClass("bottom-pos")
      .removeClass("middle-pos");
    setTimeout(function(){
      $(".main-slider-item:nth-of-type("+(hide+1)+")")
        .addClass("animate-me")
        .removeClass("middle-pos")
        .addClass("bottom-pos");
      $(".main-slider-item:nth-of-type("+(show+1)+")")
        .addClass("animate-me")
        .addClass("middle-pos");
    },50);
  },10000);
});
loadNext();
