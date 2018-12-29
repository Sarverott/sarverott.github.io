class squarePatternShades extends animationObject{
  defineListeners(){
    //this.paint.clearRect(0,0,this.container.width,this.container.height);
    this.fontSize=8;
    this.cols=[];
    this.animatorObject=class{
      constructor(hook, x, y, limit, height){
        this.paint=hook;
        this.y=y;
        this.limit=limit;
        this.height=height;
        this.x=x;
      }
      print(text){
        if(this.limit<this.y-text.length*this.height){
          this.y=0;
        }

        //this.paint.fillStyle='rgba(0,0,0,0.1)';
        //this.paint.fillRect(this.x,this.y-(this.height*text.length)-this.height,this.x+this.height,this.y+this.height);
        this.paint.fillStyle="#a00";
        this.paint.fillText(text.substr(0,1), this.x, this.y);
        for(var i=1;i<text.length;i++){
          this.paint.fillStyle="#"+Math.floor(((text.length-i)/text.length)*9)+"00";
          this.paint.fillText(text.substr(i,1), this.x, this.y-(i*this.height));
        }
        this.y+=this.height;
      }
    };
    var tmpCLASS=this.animatorObject;
    for(var i=0;i*this.fontSize*0.8<this.container.width;i++){
      this.cols.push(new tmpCLASS(
        this.paint,
        i*this.fontSize*0.8,
        Math.floor(this.container.height*Math.random()/this.fontSize)*this.fontSize,
        this.container.height,
        this.fontSize
      ));
    }
  }
  animate(){
    //console.log(this);
    this.paint.font=this.fontSize+"px monospace";
    this.paint.textAlign="center";
    this.paint.fillStyle='rgba(0,0,0,0.1)';
    this.paint.fillRect(0,0,this.container.width,this.container.height);
    //this.paint.clearRect(0,0,this.container.width,this.container.height);
    for(var i in this.cols){
      this.cols[i].print(randomString(9));
    }
    this.loopIndex++;
  }
}
animationControll.addAnimation("squarePatternShades", squarePatternShades);
loadNext();
