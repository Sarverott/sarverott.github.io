class redlinesInTheDarkness //extends animationObject{
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
    //console.log(this.paint);
  }
  animate(){
    //console.log(this);
    this.paint.clearRect(0,0,this.container.width,this.container.height);
    for(var i=0;i<8;i++){
      this.paint.lineWidth=Math.floor(Math.random()*3)+1;
      this.paint.strokeStyle="#"+Math.floor(Math.random()*4)+"00";
      this.paint.beginPath();
      this.paint.moveTo(this.container.width*Math.random(), this.container.height*Math.random());
      this.paint.lineTo(this.container.width*Math.random(), this.container.height*Math.random());
      this.paint.stroke();
    }
    this.loopIndex++;
  }
}
animationControll.addAnimation("redlinesInTheDarkness", redlinesInTheDarkness);
