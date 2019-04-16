Vue.component("main-footer", {
  props:['title', 'github'],
  data:function(){
    return {
      currentDate:(new Date()).getFullYear()
    };
  },
  methods:{},
  template: `
  <footer class="main-layout container-fluid">
    <div class="top-of-foot">
      <div class="top-foot-item foot-center">Sarverott @ 2012-{{currentDate}}</div>
      <div class="top-foot-item foot-right">visit my <a class="" :href="github">Github</a> profile</div>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <div>

        </div>
      </div>
      <div class="col-sm-4">

      </div>
      <div class="col-sm-4">

      </div>
    </div>
  </footer>
  `
});
loadNext();
