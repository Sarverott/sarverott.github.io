Vue.component("main-theme", {
  props:[
    'title',
    'socialMediaLinks',
    'headerButtons',
    'backgroundCanvasConfig'
  ],
  methods:{
    getGithubLink:function(tmpSocialMediaLinks){
      for(var k in tmpSocialMediaLinks){
        if(tmpSocialMediaLinks[k].icon=='github'){
          return tmpSocialMediaLinks[k].address;
        }
      }
    }
  },
  template: `
  <div class="main-theme">
    <background-canvas :config="backgroundCanvasConfig"></background-canvas>
    <div>
      <main-header :buttons="headerButtons" :social-media-links="socialMediaLinks">{{title}}</main-header>
      <main class="main-theme container">
        <slot></slot>
      </main>
      <main-footer :github="getGithubLink(socialMediaLinks)"></main-footer>
    </div>
  </div>
  `
});
loadNext();
