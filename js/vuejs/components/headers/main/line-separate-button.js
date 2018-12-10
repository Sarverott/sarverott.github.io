Vue.component("line-separate-button", {
  props:['link', 'title', 'target'],
  template: `
    <a :href="'#'+link" :target="target">
      <button class="line-separate-button">
        {{title}}
      </button>
    </a>
  `
});
loadNext();
