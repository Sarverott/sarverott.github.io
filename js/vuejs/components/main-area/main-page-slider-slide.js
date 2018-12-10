Vue.component("main-page-slider-slide", {
  props:['description',"type","src"],
  template: `
  <div class="main-slider-item">
    <div class="main-slider-item-inside">
      <div class="main-slider-item-background">
        <video
          v-if="type=='video'"
          class="main-slider-item-video"
          muted
          autoplay
          loop
        >
          <source
            v-for="source in src"
            :src="source.src"
            :type="source.type"
          >
        </video>
        <div
          v-if="type=='image'"
          class="main-slider-item-image"
          :style="'background-image:url('+src+')'"
        >
        </div>
      </div>
      <div class="main-slider-item-content">
        <h2>
          <slot></slot>
        </h2>
        <p>{{description}}</p>
      </div>
    </div>
  </div>
  `
});
loadNext();
