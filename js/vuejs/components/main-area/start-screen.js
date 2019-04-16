Vue.component("start-screen", {
  props:[
    'content'
  ],
  template: `
    <div class="container card-item" card-index="_index_">
      <div class="row">
        <div class="col-lg-8">
          <main-page-slider>
            <main-page-slider-slide
              v-for="slide in content.slider"
              :description="slide.description"
              :type="slide.type"
              :src="slide.src"
            >
              {{slide.title}}
            </main-page-slider-slide>
          </main-page-slider>
        </div>
        <div class="col-lg-4">
          <about-me>
            {{content.about.content}}
          </about-me>
        </div>
        <div class="">
          <center>
            <category-buttons-container
              :categories="content.categories.items"
              :else-button="content.categories.elseButton"
            ></category-buttons-container>
          </center>
        </div>
        <div class="">
          <div>
          </div>
        </div>
      </div>
    </div>
  `
});
loadNext();
