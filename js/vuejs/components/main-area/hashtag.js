Vue.component("hashtag", {
  props:['link'],
  template: `
    <div>
      <a :href="'#'+link">{{slot}}</a>
    </div>
  `
});
loadNext();
