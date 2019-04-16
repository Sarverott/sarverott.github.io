 Vue.component("docs-display", {
  data:function(){
    jqueryDocsDisplayHook=this;
    return {
      images:"resources/image/no-results.png",
      title:"<invalid-title>",
      description:"Sed ac justo vel augue maximus maximus. Cras aliquet elit sed tempor venenatis. Quisque eu malesuada dui. Nam vulputate lorem eu gravida rhoncus. Proin justo mi, euismod nec efficitur eget, dictum sed nibh. Cras eu tortor orci. Nulla maximus, sapien non ultrices maximus, nisi turpis dapibus nulla, et tempus est nisi id est.",
      content:`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa leo, vulputate nec tellus vel, eleifend accumsan nunc. Nam sit amet leo lectus. Proin convallis gravida vulputate. Proin placerat bibendum tellus, nec fermentum turpis mattis nec. Pellentesque venenatis dapibus gravida. Cras condimentum id ligula nec eleifend. Maecenas laoreet cursus placerat. Suspendisse et lorem a erat sodales semper. Nullam rutrum nisi a dui fermentum, at pellentesque urna pharetra.

Aenean et sodales tellus. Sed ut nunc lacus. Duis a sem at felis porttitor tempor quis in justo. Quisque dignissim, elit eget accumsan malesuada, velit erat volutpat massa, at rhoncus dui ante id ex. Nunc consectetur tincidunt feugiat. Aliquam non est eget lorem ornare ornare. Mauris semper tempor scelerisque. Suspendisse potenti. Pellentesque consequat iaculis tortor a aliquet.

Sed ac justo vel augue maximus maximus. Cras aliquet elit sed tempor venenatis. Quisque eu malesuada dui. Nam vulputate lorem eu gravida rhoncus. Proin justo mi, euismod nec efficitur eget, dictum sed nibh. Cras eu tortor orci. Nulla maximus, sapien non ultrices maximus, nisi turpis dapibus nulla, et tempus est nisi id est.

Donec vel nulla viverra, dictum tellus ac, aliquet nisl. Duis hendrerit felis sed leo sagittis, ut aliquam lorem molestie. Praesent faucibus augue turpis, vel aliquam lacus sagittis et. Sed semper gravida molestie. Phasellus ac nunc viverra, mattis est ut, bibendum ipsum. Vivamus accumsan facilisis purus quis sodales. Fusce accumsan leo dictum lorem sagittis, at mollis elit scelerisque. Nullam ultricies, nunc pulvinar porttitor luctus, neque nisi malesuada neque, nec dignissim nisl elit eu odio. Proin massa magna, pharetra at turpis eu, facilisis luctus dolor. Phasellus hendrerit urna semper, suscipit augue vitae, ornare sapien. Ut dolor mauris, bibendum eu arcu id, pellentesque tincidunt ligula.

Donec efficitur blandit sem eget accumsan. Vestibulum tristique est vestibulum, fringilla urna quis, bibendum justo. Aliquam tristique ligula vel ante hendrerit, vel convallis justo commodo. Vestibulum in sapien eget est tincidunt lacinia quis at diam. Fusce auctor et velit vel aliquam. Pellentesque viverra ex sed posuere maximus. Aenean porttitor ultrices eros. Vestibulum laoreet est id tortor facilisis, ut dictum arcu bibendum. Fusce et ante in nulla cursus laoreet eget ut urna. Vivamus ut mauris nec arcu pretium accumsan et at lacus. Donec nec accumsan metus. Pellentesque et purus est. Curabitur ultrices porta mi et bibendum.
      `,
      links:[
        {name:"Github - home page",href:"https://github.com/"},
        {name:"Google start page",href:"https://www.google.pl/"},
        {name:"YouTube",href:"https://www.youtube.com/"}
      ],
      category:"non-category"
    };
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
