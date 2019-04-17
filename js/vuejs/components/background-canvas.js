Vue.component("background-canvas", {
  props:['config'],
  template: `
    <canvas :id="config.id"  class="background-canvas"  width="300" height="300"></canvas>
  `
});
loadNext();
