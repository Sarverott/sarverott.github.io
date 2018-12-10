Vue.component("category-button-box", {
  props:['icon', 'link'],
  methods:{
    debug:function(text){
      console.log(text);
      return "";
    }
  },
  template: `
    <a :href="link">
      <div class="category-button-box">
        <div class="cbb-background" :debug="debug(icon)" :style="'background-image:url('+icon+')'">
        </div>
        <div class="cbb-slider">
          <div></div>
        </div>
        <div class="cbb-title">
          <slot></slot>
        </div>
      </div>
    </a>
  `
});
