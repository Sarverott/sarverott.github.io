class squareNoise extends animationObject{

  animate(){
    //console.log(this);
    this.paint.fillStyle='rgba(0,0,0,0.1)';
    this.paint.fillRect(0,0,this.container.width,this.container.height);
    for(var i=0;i<20;i++){
      //this.paint.lineWidth=Math.floor(Math.random()*3)+1;
      //this.paint.strokeStyle="#"+Math.floor(Math.random()*4)+"00";
      //this.paint.fillRect(0,0,Math.random()this.container.width,this.container.height);
      var x=Math.floor((Math.random()*(this.container.width))/10)*10;
      var y=Math.floor((Math.random()*(this.container.height))/10)*10;
      this.paint.fillStyle='#'+Math.floor(5*Math.random())+"00";
      this.paint.fillRect(x,y,10,10);
      //this.paint.beginPath();
      //this.paint.moveTo(this.container.width*Math.random(), this.container.height*Math.random());
      //this.paint.lineTo(this.container.width*Math.random(), this.container.height*Math.random());
      //this.paint.stroke();
    }
    this.loopIndex++;
  }
}
animationControll.addAnimation("squareNoise", squareNoise);
loadNext();
