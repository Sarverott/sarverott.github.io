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
class animationController{
  constructor(){
    //this.animationClass=[];
    //this.animationIDs=[];
    //this.theaterObjects=[];
    //this.theaterIDs=[];
    this.theaters=[];
    this.animations=[];
  }
  addAnimation(id, funct){
    this.animations.push({
      id:id,
      funct:funct
    });
    //this.animationIDs.push(id);
    //this.animationClass.push(funct);
  }
  getAnimationIdIndex(id){
    var i=0;
    while(i<this.animations.length){
      if(this.animations[i].id==id){
        break;
      }
      i++;
    }
    if(i<this.animations.length){
      return i;
    }else{
      throw "### ANIMATION ID NOT FOUND ###";
    }
  }
  getAnimation(id){
    return this.animations[this.getAnimationIdIndex(id)].funct;
  }
  listAnimations(){
    return this.animationIDs;
  }
  deleteAnimation(id){
    var indexToDelete=this.getAnimationIdIndex(id);
    this.animations.splice(indexToDelete, 1);
    //this.animationClass.splice(indexToDelete, 1);
    //this.animationIDs.splice(indexToDelete, 1);
  }
  changeTheaterAnimation(id, animationId, intervalTime){
    this.getTheater(id).changeAnimation(this.getAnimation(animationId), intervalTime);
    this.getTheater(id).startAnimation();
  }
  createTheater(id, animationId, intervalTime){
    //console.log("this.getAnimation(animationId):");
    //console.log(this.getAnimation(animationId));
    this.theaters.push({
      id:id,
      obj:new teatherObject(id, this.getAnimation(animationId), intervalTime)
    });
    //this.theaterObjects.push(new teatherObject(id, this.getAnimation(animationId), intervalTime));
    //this.theaterIDs.push(id);
  }
  deleteTheater(id){
    var hook=this.getTheater(id);
    if(hook==null){

    }else{
      hook.stopAnimation();
      //delete hook;
    }
  }
  getTheater(id){
    //return this.theaterObjects[this.getTheaterIdIndex(id)];
    var hook=this.theaters[this.getTheaterIdIndex(id)];
    if(hook==null){
      return null;
    }else{
      return hook.obj;
    }
  }
  getTheaterIdIndex(id){
    var i=0;
    while(i<this.theaters.length){
      if(this.theaters[i].id==id){
        break;
      }
      i++;
    }
    if(i<this.theaters.length){
      return i;
    }else{
      //return null;
      throw "### ANIMATION ID NOT FOUND ###";
    }
  }
}

class teatherObject{
  constructor(id, animationClass, intervalTime){
    this.container=document.getElementById(id);
    this.paint=this.container.getContext("2d");
    this.intervalHook=null;
    this.initAnimation(animationClass, intervalTime);
  }
  initAnimation(animationClass, intervalTime){
    this.backupAnimationClass=animationClass;
    this.intervalTime=intervalTime;
    //console.log(this.backupAnimationClass);
    this.activeAnimationClass=new animationClass(this.paint, this.container);
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
    this.stopAnimation();
    this.activeAnimationClass.destroy();
    this.initAnimation(this.backupAnimationClass, this.intervalTime);
  }
  changeAnimation(animationClass, intervalTime){
    this.stopAnimation();
    this.activeAnimationClass.destroy();
    this.initAnimation(animationClass, intervalTime);
  }
}
function createAnimation(id, animationFunct, intervalTime){
  return new animationObject(id, animationFunct, intervalTime);
}
var animationControll=new animationController();
loadNext();
