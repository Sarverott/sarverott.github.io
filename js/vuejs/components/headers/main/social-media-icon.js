Vue.component("social-media-icon", {
  props:['link', 'platformName'],
  data:function(){
    return {
      githubLink:"",

    };
  },
  template: `
  <a target="_blank" class="social-media-button" :href="link" :alt="platformName">
    <img :src="'resources/social-media-icons/'+platformName+'_gray.svg'" class="social-media-icon gray">
    <img :src="'resources/social-media-icons/'+platformName+'_color.svg'" class="social-media-icon color" :alt="platformName">
  </a>
  `
});
loadNext();
