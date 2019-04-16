 Vue.component("docs-display", {
  data:function(){
    return jqueryDocsDisplayHook;
  },
  methods:{
    newlineToBR:function(content){
      return content.split("\n");
    }
  },
  template:`
    <div class="container card-item" card-index="docs">
      <div class="row">
        <div class="col-12">
          <h1>{{title}}</h1>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <img :src="images[0]" width="100%">
        </div>
        <div class="col-sm-6 col-md-8 col-lg-9">
          <div>{{description}}</div>
          <div style="padding:10px;border:1px white dotted">
            <a style="color:red;text-decoration:none;" :href="'#search/'+category">
              {{category}}
            </a>
          </div>
        </div>
        <div style="color:white" class="col-12">
          <p v-for="line in newlineToBR(content)">{{line}}&nbsp;</p>
        </div>
        <div v-if="links.length>0">
          <h4>LINKS</h4>
          <ul>
            <a style="color:red;text-shadow:  0 0 3px #000000, 0 0 5px #000000, 0 0 12px #000000;" v-for="link in links" :href="link.href"><li>{{link.name}}</li></a>
          </ul>
        </div>
      </div>
    </div>
  `
});
loadNext();
