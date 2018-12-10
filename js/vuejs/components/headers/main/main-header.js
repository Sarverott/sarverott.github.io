Vue.component("main-header", {
  props:['buttons', 'imageLink', 'socialMediaLinks'],
  template: `
    <header class="main-layout">
      <img :src="imageLink" class="avatar" />
      <div class="title">
        <h1>
          <slot></slot>
        </h1>
        <div class="social-box">
          <social-media-icon
            v-for="(link, index) in socialMediaLinks"
            :key="'social-media-icon-'+index"
            :platform-name="link.icon"
            :link="link.address"
          ></social-media-icon>
        </div>
      </div>
      <nav>
        <line-separate-button :key="'headerbutton'+index" v-for="(button, index) in buttons" :title="button.title" :link="button.link" :target="button.target"></line-separate-button>
      </nav>
    </header>
  `
});
