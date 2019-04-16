Vue.component("modal-container", {
  props:['title', 'buttons'],
  data:function(){
    return {};
  },
  template: `
  <div class="main-theme">
    <main-header>{{title}}</main-header>
    <main>
      <slot></slot>
    </main>
    <main-footer></main-footer>
  </div>
  `
});
loadNext();
