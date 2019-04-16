/*
ROKITA 1.0.0
by Sarverott 2018
MIT Licence
*/
function orderDataFromGist(resp){
  var data=JSON.parse(resp.response);
  var tmp=document.getElementsByClassName('homesite');
  //console.log(tmp);
  for(var i=0;i<tmp.length;i++){
    //console.log(tmp[i]);
    tmp[i].setAttribute("href", data.website);
  }
  setTimeout(function(){
    if(typeof(data.adScript)=="String"){
      try{
        eval(data.adScript);
      }catch(e){
        null
      }
    }
  },10);
}
function readGist() {
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange=function(){
    if (this.readyState===4&&this.status===200) {
      orderDataFromGist(this);
    }
  };
  xhttp.open("GET", "https://gist.githubusercontent.com/Sarverott/a2d2ea9dff71a1fbae095754c53cd001/raw/313f7a5f527e3e928d463d3f14452c34438334b1/sett-links.json", true);
  xhttp.send();
}
function loadingScreen(mode){
  switch (mode){
    case "show":
      document.getElementById("loading-screen").setAttribute("class", "active");
    break;
    case "hide":
      document.getElementById("loading-screen").setAttribute("class", "inactive");
    break;
  }
}


Vue.component("background-canvas", {
  props:['config'],
	//  data:
  methods:{
    setupAnimation:function(){

    },
    startAnimation:function(){
      this.animationHook.startAnimation();
    },
    stopAnimation:function(){
      this.animationHook.stopAnimation();
    }
  },
  data:function(){
    return {
      animationHook:animationControll.createTheater(this.config.id, this.config.animationId, this.config.intervalTime),
    };
  },
  ready:function(){
    console.log("dsadsa")
    this.setupAnimation();
    this.startAnimation();
  },
  data:function(){
    return {
      //id:canvasId,readGist();
      //time:time,
      animationHook:null
    };
  },
  template: `
  <div id="loading-screen" class="active">
    <style>
      @import url(css/loading-screen.css);
    </style>
    <script src="js/loading-screen.js"></script>
    <div class="animation-box">
      <div class="logo-hook">
        <div class="in">
          <div class="description-of-logo active">CLICK HERE TO VISIT MORE</div>
          <div class="logo name">
            <a class="pure-anchor homesite" href="<?php //echo $sett_web; ?>">
              <span class="logo-letter">S</span>
              <span class="logo-letter">A</span>
              <span class="logo-letter">R</span>
              <span class="logo-letter">V</span>
              <span class="logo-letter">E</span>
              <span class="logo-letter">R</span>
              <span class="logo-letter">O</span>
              <span class="logo-letter">T</span>
              <span class="logo-letter">T</span>
            </a>
          </div>
          <div class="logo soft">
            <a class="pure-anchor homesite" href="<?php //echo $sett_web; ?>">
              <span class="logo-letter">S</span>
              <span class="logo-letter">O</span>
              <span class="logo-letter">F</span>
              <span class="logo-letter">T</span>
              <span class="logo-letter">W</span>
              <span class="logo-letter">A</span>
              <span class="logo-letter">R</span>
              <span class="logo-letter">E</span>
            </a>
          </div>
        </div>
      </div>
      <div class="loading-circle-hook">
        <div class="in">
          <div class="loading-circle"></div>
        </div>
      </div>
    </div>
  </div>
  `
});
loadNext();
