Vue.component("about-me", {
  props:['icon', 'link'],
  template: `
    <div>
      <center>
        <h3 class="about-me-title">About Me</h3>
      </center>
      <div class="about-me-content">
        <slot></slot>
      </div>
    </div>
  `
});
loadNext();
