Vue.component("main-footer", {
  props:['title', 'github'],
  data:function(){
    return {

    };
  },
  methods:{},
  template: `
  <footer class="main-layout container-fluid">
    <div class="to-right">
      visit my <a class="" :href="github">Github</a> profile
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
