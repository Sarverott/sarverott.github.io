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
        :icon="category.icon"
        :link="category.link"
      >
        <div class="cbb-title">
          {{category.title}}
        </div>
        <div class="cbb-desc">
          {{category.text}}
        </div>
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
loadNext();
