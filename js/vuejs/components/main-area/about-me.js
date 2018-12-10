Vue.component("about-me", {
  props:['icon', 'link'],
  template: `
    <div>
      <center>
        <h3 class="about-me-title">About Me</h3>
      </center>
      <div class="about-me-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget accumsan purus, vel bibendum magna. Aenean id malesuada lacus. Donec eu dolor vitae elit fringilla faucibus. Nunc ante neque, condimentum vel cursus nec, auctor ut nibh. Aenean molestie orci est, nec pulvinar erat tempor ut. Curabitur eget purus dui. Integer pharetra placerat arcu nec cursus. Integer porta odio id luctus laoreet. Mauris ornare vel metus non facilisis. Aliquam volutpat elit vitae ex gravida ornare. Mauris rhoncus id odio non ultricies. Ut condimentum, nisl in vehicula faucibus, leo dui aliquam sem, id tempor neque lacus vel lorem. Duis tincidunt interdum tortor, nec vulputate ipsum blandit sed. Aenean nec augue dui. Maecenas lobortis sem tortor, quis sollicitudin sapien convallis nec.
      </div>
    </div>
  `
});
loadNext();
