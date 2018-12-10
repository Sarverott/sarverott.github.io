/*
class animationObject{
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
}
*/
class animationController{
  constructor(){
    this.animationClass=[];
    this.animationIDs=[];
    this.theaterObjects=[];
    this.theaterIDs=[];
  }
  addAnimation(id, funct){
    this.animationIDs.push(id);
    this.animationClass.push(funct);
  }
  getAnimationIdIndex(id){
    var i=0;
    while(i<this.animationIDs.length){
      if(this.animationIDs[i]==id){
        break;
      }
      i++;
    }
    if(i<this.animationIDs.length){
      return i;
    }else{
      throw "### ANIMATION ID NOT FOUND ###";
    }
  }
  getAnimation(id){
    return this.animationClass[this.getAnimationIdIndex(id)];
  }
  listAnimations(){
    return this.animationIDs;
  }
  deleteAnimation(id){
    var indexToDelete=this.getAnimationIdIndex(id);
    this.animationClass.splice(indexToDelete, 1);
    this.animationIDs.splice(indexToDelete, 1);
  }
  createTheater(id, animationId, intervalTime){
    this.theaterObjects.push(new teatherObject(id, this.getAnimation(animationId), intervalTime));
    this.theaterIDs.push(id);
  }
  getTheater(id){
    return this.theaterObjects[this.getTheaterIdIndex(id)];
  }
  getTheaterIdIndex(id){
    var i=0;
    while(i<this.theaterIDs.length){
      if(this.theaterIDs[i]==id){
        break;
      }
      i++;
    }
    if(i<this.theaterIDs.length){
      return i;
    }else{
      throw "### ANIMATION ID NOT FOUND ###";
    }
  }
}

class teatherObject{
  constructor(id, animationClass, intervalTime){
    this.container=document.getElementById(id);
    this.paint=this.container.getContext("2d");
    this.backupAnimationClass=animationClass;
    this.intervalHook=null;
    this.intervalTime=intervalTime;
    this.initAnimation();
  }
  initAnimation(){
    //console.log(this.backupAnimationClass);
    this.activeAnimationClass=new this.backupAnimationClass(this.paint, this.container);
  }
  startAnimation(){
    var activeAnimationClass=this.activeAnimationClass;
    this.intervalHook=setInterval(function(){
      activeAnimationClass.animate();
    }, this.intervalTime);
  }
  stopAnimation(){
    clearInterval(this.intervalHook);
  }
  resetAnimation(){
    stopAnimation();
    this.activeAnimationClass.destroy();
    this.initAnimation();
  }
}
function createAnimation(id, animationFunct, intervalTime){
  return new animationObject(id, animationFunct, intervalTime);
}
var animationControll=new animationController();
loadNext();
