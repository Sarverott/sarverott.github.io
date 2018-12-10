
class sarverottMeditation //extends animationObject{
{
  // animationObject
  constructor(paint, container){
    this.paint=paint;
    this.container=container;
    this.loopIndex=0;
    this.defineListeners();
  }
  defineListeners(){

  }
  animate(){
    this.loopIndex++;
  }
  destroy(){

  }
  // animationObject
  defineListeners(){
    this.puppet={
      loaded:0,
      ready:false,
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
          this.ready=true;
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
    this.puppet.init([
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
    this.hovero={
      active:true,
      current:20,
    };
  }
  printText(){
    art.font = "48px Arial Black";
    art.textBaseline = "middle";
    art.textAlign="center";
    art.fillStyle="#fff";
    art.fillText("CLICK ME", this.container.width/2, this.container.height/1.5);
  }
  animate(){
    this.paint.save();
    this.paint.clearRect(0,0,this.container.width,this.container.height);
    if(this.hovero.current!=20){
      for(var i=0;i<4;i++){
        this.paint.strokeStyle="#"+Math.floor(Math.random()*10)+"00";
        this.paint.beginPath();
        this.paint.moveTo(this.container.width*Math.random(), this.container.height*Math.random());
        this.paint.lineTo(this.container.width*Math.random(), this.container.height*Math.random());
        this.paint.stroke();
      }
    }
    this.paint.fillStyle="rgba(160,160,160,"+(this.hovero.current/20)+")";
    //console.log("rgba("+Math.round(255-(20-this.hovero.current)*5*Math.random())+","+Math.round(255-(20-this.hovero.current)*5*Math.random())+","+Math.round(255-(20-this.hovero.current)*5*Math.random())+",0.5)");
    this.paint.fillRect(0,0,this.container.width,this.container.height);
    this.paint.drawImage(this.puppet.getBodyPart("body"), this.container.width/2-this.puppet.getBodyPart("body").width/2, this.container.height/1.5-this.puppet.getBodyPart("body").height/2+Math.sin(this.loopIndex/10)*6);
    if(Math.random()>0.9&&!this.hovero.active){
      this.paint.translate(this.container.width/2, this.container.height/1.5-this.puppet.getBodyPart("body").height/2+Math.sin(this.loopIndex/10)*6);
      this.paint.rotate((Math.PI / 360) * (5-10*Math.random()));
      this.paint.translate(-(this.container.width/2), -(this.container.height/1.5-this.puppet.getBodyPart("body").height/2+Math.sin(this.loopIndex/10)*6));
      this.paint.drawImage(this.puppet.getBodyPart("head"), this.container.width/2-this.puppet.getBodyPart("head").width/2+Math.random()*6-3, this.container.height/1.5-this.puppet.getBodyPart("head").height/2-this.puppet.getBodyPart("body").height/1.5+Math.sin(this.loopIndex/10)*6+Math.random()*6-3);
    }else{
      this.paint.drawImage(this.puppet.getBodyPart("head"), this.container.width/2-this.puppet.getBodyPart("head").width/2, this.container.height/1.5-this.puppet.getBodyPart("head").height/2-this.puppet.getBodyPart("body").height/1.5+Math.sin(this.loopIndex/10)*6);
    }
    this.paint.restore();
    this.paint.save();
    //this.paint.rotate((Math.PI / 360) * (25));
    if(this.hovero.active&&this.hovero.current<20){
      this.hovero.current++;
    }else if(!this.hovero.active&&this.hovero.current>0){
      this.hovero.current--;
    }
    this.paint.translate(this.container.width/2+this.puppet.getBodyPart("body").width/8, this.container.height/1.5-this.puppet.getBodyPart("body").height/2.3+Math.sin(this.loopIndex/10)*6);
    this.paint.rotate((Math.PI / 90) * (this.hovero.current));
    this.paint.translate(-(this.container.width/2+this.puppet.getBodyPart("body").width/8), -(this.container.height/1.5-this.puppet.getBodyPart("body").height/2.3+Math.sin(this.loopIndex/10)*6));
    this.paint.drawImage(this.puppet.getBodyPart("hand_left"), this.container.width/2+this.puppet.getBodyPart("body").width/8, this.container.height/1.5-this.puppet.getBodyPart("body").height/2.3-this.puppet.getBodyPart("hand_left").height/2+Math.sin(this.loopIndex/10)*6);
    this.paint.restore();
    this.paint.save();
    //this.paint.rotate((Math.PI / 360) * (-25));
    this.paint.translate(this.container.width/2-this.puppet.getBodyPart("body").width/8, this.container.height/1.5-this.puppet.getBodyPart("body").height/2.3+Math.sin(this.loopIndex/10)*6);
    this.paint.rotate((Math.PI / 90) * (-this.hovero.current));
    this.paint.translate(-(this.container.width/2-this.puppet.getBodyPart("body").width/8), -(this.container.height/1.5-this.puppet.getBodyPart("body").height/2.3+Math.sin(this.loopIndex/10)*6));
    this.paint.drawImage(this.puppet.getBodyPart("hand_right"), this.container.width/2-this.puppet.getBodyPart("body").width/8-this.puppet.getBodyPart("hand_right").width, this.container.height/1.5-this.puppet.getBodyPart("hand_right").height/2-this.puppet.getBodyPart("body").height/2.3+Math.sin(this.loopIndex/10)*6);
    this.paint.restore();
    if(!this.hovero.active&&this.hovero.current==0&&th%21>7){
      printText();
    }
    this.loopIndex++;
  }
}
animationControll.addAnimation("sarverottMeditation", sarverottMeditation);
loadNext();
