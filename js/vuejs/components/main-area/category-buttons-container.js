Vue.component("category-buttons-container", {
  props:['categories', 'elseButton'],
  methods:{
    debug:function(text){
      //console.log(text);
      return "";
    }
  },
  template: `
    <div class="category-buttons-container">
      <h3 class="right-side-desc">CATEGORIES</h3>
      <category-button-box
        v-for="category in categories"
        :debug1="debug(category)"
        :debug2="debug(categories)"
        :icon="category.icon"
        :link="category.link"
        :pictures-gallery="category.pictures"
      >
        {{category.title}}
      </category-button-box>
      <category-button-box
        :icon="elseButton.icon"
        :link="elseButton.link"
        :pictures-gallery="elseButton.pictures"
      >
        ELSE
      </category-button-box>
    </div>
  `
});
