//fileVersions.push({name:"settAnimation", version:0});
$(document).ready(function(){
  $("#sett-painting").hover(function(){hovero.active=false},function(){hovero.active=true});
});
var puppet={
  loaded:0,
  init:function(bodypices){
    for(var i=0;i<bodypices.length;i++){
      this.bodyparts.unshift({
        name:bodypices[i].name,
        image:new Image(),
        size:{
          width:0,
          height:0
        },
        src:bodypices[i].src,
        loaded:false
      });
    }
    for(var i=0;i<this.bodyparts.length;i++){
      this.addListener(i);
    }
    for(var i=0;i<this.bodyparts.length;i++){
      this.bodyparts[i].image.src=this.bodyparts[i].src;
    }
  },
  onloadFunct:function(){
    setInterval(function(){draw();},50);
  },
  addListener:function(index){
    var parrent=this;
    this.bodyparts[index].image.addEventListener('load', function() {
      parrent.initPicture(index);
      console.log(index);
      console.log(parrent);
    }, false);
  },
  initPicture:function(index){
    console.log(index);
    this.bodyparts[index].loaded=true;
    this.bodyparts[index].size.width=this.bodyparts[index].image.naturalWidth;
    this.bodyparts[index].size.height=this.bodyparts[index].image.naturalHeight;
    this.loaded++;
    if(this.loaded>=this.bodyparts.length){
      this.onloadFunct();
    }
  },
  getBodyPart:function(name){
    for(i in this.bodyparts){
      if(this.bodyparts[i].name==name){
        return this.bodyparts[i].image;
        break;
      }
    }
  },
  bodyparts:[]
};
var painting=document.getElementById("sett-painting");
var art=painting.getContext("2d");
//art.fillStyle="#000";
var frameCounter=0;
var hovero={
  active:true,
  current:20,
};
function printText(){
  art.font = "48px Arial Black";
  art.textBaseline = "middle";
  art.textAlign="center";
  art.fillStyle="#fff";
  art.fillText("CLICK ME", painting.width/2, painting.height/1.5);
}
function draw(){
  //console.log("dravo");
  art.save();
  art.clearRect(0,0,painting.width,painting.height);
  if(hovero.current!=20){
    for(var i=0;i<4;i++){
      art.strokeStyle="#"+Math.floor(Math.random()*10)+"00";
      art.beginPath();
      art.moveTo(painting.width*Math.random(), painting.height*Math.random());
      art.lineTo(painting.width*Math.random(), painting.height*Math.random());
      art.stroke();
    }
  }
  art.fillStyle="rgba(160,160,160,"+(hovero.current/20)+")";
  //console.log("rgba("+Math.round(255-(20-hovero.current)*5*Math.random())+","+Math.round(255-(20-hovero.current)*5*Math.random())+","+Math.round(255-(20-hovero.current)*5*Math.random())+",0.5)");
  art.fillRect(0,0,painting.width,painting.height);
  art.drawImage(puppet.getBodyPart("body"), painting.width/2-puppet.getBodyPart("body").width/2, painting.height/1.5-puppet.getBodyPart("body").height/2+Math.sin(frameCounter/10)*6);
  if(Math.random()>0.9&&!hovero.active){
    art.translate(painting.width/2, painting.height/1.5-puppet.getBodyPart("body").height/2+Math.sin(frameCounter/10)*6);
    art.rotate((Math.PI / 360) * (5-10*Math.random()));
    art.translate(-(painting.width/2), -(painting.height/1.5-puppet.getBodyPart("body").height/2+Math.sin(frameCounter/10)*6));
    art.drawImage(puppet.getBodyPart("head"), painting.width/2-puppet.getBodyPart("head").width/2+Math.random()*6-3, painting.height/1.5-puppet.getBodyPart("head").height/2-puppet.getBodyPart("body").height/1.5+Math.sin(frameCounter/10)*6+Math.random()*6-3);
  }else{
    art.drawImage(puppet.getBodyPart("head"), painting.width/2-puppet.getBodyPart("head").width/2, painting.height/1.5-puppet.getBodyPart("head").height/2-puppet.getBodyPart("body").height/1.5+Math.sin(frameCounter/10)*6);
  }
  art.restore();
  art.save();
  //art.rotate((Math.PI / 360) * (25));
  if(hovero.active&&hovero.current<20){
    hovero.current++;
  }else if(!hovero.active&&hovero.current>0){
    hovero.current--;
  }
  art.translate(painting.width/2+puppet.getBodyPart("body").width/8, painting.height/1.5-puppet.getBodyPart("body").height/2.3+Math.sin(frameCounter/10)*6);
  art.rotate((Math.PI / 90) * (hovero.current));
  art.translate(-(painting.width/2+puppet.getBodyPart("body").width/8), -(painting.height/1.5-puppet.getBodyPart("body").height/2.3+Math.sin(frameCounter/10)*6));
  art.drawImage(puppet.getBodyPart("hand_left"), painting.width/2+puppet.getBodyPart("body").width/8, painting.height/1.5-puppet.getBodyPart("body").height/2.3-puppet.getBodyPart("hand_left").height/2+Math.sin(frameCounter/10)*6);
  art.restore();
  art.save();
  //art.rotate((Math.PI / 360) * (-25));
  art.translate(painting.width/2-puppet.getBodyPart("body").width/8, painting.height/1.5-puppet.getBodyPart("body").height/2.3+Math.sin(frameCounter/10)*6);
  art.rotate((Math.PI / 90) * (-hovero.current));
  art.translate(-(painting.width/2-puppet.getBodyPart("body").width/8), -(painting.height/1.5-puppet.getBodyPart("body").height/2.3+Math.sin(frameCounter/10)*6));
  art.drawImage(puppet.getBodyPart("hand_right"), painting.width/2-puppet.getBodyPart("body").width/8-puppet.getBodyPart("hand_right").width, painting.height/1.5-puppet.getBodyPart("hand_right").height/2-puppet.getBodyPart("body").height/2.3+Math.sin(frameCounter/10)*6);
  art.restore();
  if(!hovero.active&&hovero.current==0&&frameCounter%21>7){
    printText();
  }
  frameCounter++;
}
puppet.init([
  {
    name:"body",
    src:"/img/body-reduced.png"
  },
  {
    name:"head",
    src:"/img/head-reduced.png"
  },
  {
    name:"hand_right",
    src:"/img/hand_right-reduced.png"
  },
  {
    name:"hand_left",
    src:"/img/hand_left-reduced.png"
  }
]);
loadNext();
