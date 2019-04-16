Vue.component("search-results", {
  data:function(){
    jquerySearchResultsHook=this;
    return {
      searchPhrase:"",
      searchResult:[],
      page:0,
      pagesCount:0
    };
  },
  methods:{
    paginationRange:function(page, pagesCount, limit){
      var ret=[];
      var initNum=0;
      if(limit/2<page){
        initNum=page-limit/2;
      }
      if(pagesCount-limit/2<page){
        initNum=pagesCount-limit;
      }
      if(pagesCount<limit){
        limit=pagesCount;
      }
      for(var i=initNum;i<initNum+limit;i++){
        ret.push(i+1);
      }
      return ret;
    },
    clickOnSearchButton:function(){
      if(searchResult.length==0){
        if(backgroundSettings.animationId!=localizationsSettings.places["_unknown_"].animationId){
          backgroundSettings.animationId=localizationsSettings.places["_unknown_"].animationId;
          backgroundSettings.intervalTime=localizationsSettings.places["_unknown_"].animationIntervalTime;
          changeBackground();
        }
      }else{
        if(backgroundSettings.animationId!=localizationsSettings.places["_index_"].animationId){
          backgroundSettings.animationId=localizationsSettings.places["_index_"].animationId;
          backgroundSettings.intervalTime=localizationsSettings.places["_index_"].animationIntervalTime;
          changeBackground();
        }
      }
    },
  },
  template: `
    <div class="container card-item" card-index="category">
      <div class="row">
        <!--<div class="col-12" >
          <input  style="font-family:monospace;color:white;background:black;border:1px solid white;padding:5px;width:100%" v-model="searchPhrase">
          <button  style="font-family:monospace;color:red;background:black;border:1px solid red;padding:10px;width:100%">search</button>
        </div>-->
        <div  style="font-family:monospace" class="col-12" v-if="searchPhrase!=''">{{searchPhrase}}</div>
      </div>
      <div v-if="searchResult.length!=0">
        <a v-for="item in searchResult" :href="'#docs/'+item.link">
          <div>
            <div>
              <h4>{{item.title}}</h4>
              <p>{{item.desc}}</p>
            </div>
          </div>
        </a>
        <div>
          <center>
            <span v-for="number in paginationRange(page, pagesCount, 9)">
              <a :href="'#search/'+searchPhrase+'/'+number" class="paginator-item" v-if="page!=number">
                {{number}}
              </a>
              <span class="paginator-item-passive" v-if="page==number">
                {{number}}
              </span>
            </span>
          </center>
        </div>
      </div>
      <div v-if="searchResult.length==0">
        <br>
        <br>
        <br>
        <br>
        <center>
          <h3 style="font-family:monospace">NO RESULTS</h3>
          <img  src="resources/image/no-results-min.png">
        </center>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  `
});
loadNext();
