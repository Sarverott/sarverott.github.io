Vue.component("background-canvas", {
  props:['config'],
	//  data:
  /*methods:{
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
  },/*
  data:function(){
    return {
      //id:canvasId,
      //time:time,
      animationHook:null
    };
  },*/
  template: `
    <canvas :id="config.id"  class="background-canvas"  width="300" height="300"></canvas>
  `
});
loadNext();
