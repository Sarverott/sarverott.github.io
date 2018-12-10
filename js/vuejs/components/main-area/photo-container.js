Vue.component("photo-container", {
  params:['photos'],
  methods:{
    onPictureBoxClick:function(collectionId){
      this.$emit("", collectionId);
    }
  },
  template: `
    <div class="container">
      <div>
        <picture-box v-for="photo in photos" :compressed="photo.pictures.min" :link="photo.link" :tags="photo.tags" :key="'photobox'+photo.id" :title="photo.title"></picture-box>
      </div>
    </div>
  `
});
loadNext();
