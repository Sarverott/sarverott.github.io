Vue.component("photo-box", {
  props:["title", "tags", "link", 'compressed'],
  methods:{
    onPictureHover:function(){

    }
  },
  template:`
    <a :href="link">
      <img :alt="title" :src="compressed" />
      <div>
        <hashtag v-for="tag in tags">{{tag}}</hashtag>
      </div>
    </a>
  `
});
loadNext();
