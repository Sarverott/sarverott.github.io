Vue.component("hashtag", {
  props:['link'],
  template: `
    <div class="hashtag">
      <a :href="'#'+link">{{slot}}</a>
    </div>
  `
});
loadNext();
