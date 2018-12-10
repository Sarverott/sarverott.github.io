const mode="normal"
var listenerArray=[];
function loadNext(){
  var tmp=listenerArray.pop();
  if(typeof(tmp)!="undefined"){
    tmp();
  }else{
    loadingScreen("hide");
  }
  (mode=="debug")?console.log(tmp):null;
  (mode=="debug")?console.log("LOADING"):null;
}
function getRandomString(len){
  var matrix="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
  var output="";
  for(var i=0;i<len;i++){
    output+=matrix.charAt(Math.random()*matrix.length);
  }
  return output;
}
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function loadScript(path){
  listenerArray.unshift(function(){
    var script=document.createElement('script');
    script.src=path;
    document.head.appendChild(script);
  });
}
var beforeLoad={
  settings:[
    "header",
    "emails",
    "footer",
    "elsebutton",
    "categories",
    "background",
    "phones",
    "socialmedia",
    "slider"
  ],
  vuejs:[
    {
      name:"components",
      components:[
        {
          name:"layouts",
          components:[
            "prototype-theme",
            "article-theme",
            "main-theme"
          ]
        },
        {
          name:"headers",
          components:[
            {
              name:"main",
              components:[
                "main-header",
                "social-media-icon",
                "line-separate-button"
              ]
            }
          ]
        },
        {
          name:"main-area",
          components:[
            "main-page-slider",
            "main-page-slider-slide",
            "category-buttons-container",
            "category-button-box",
            "photo-box",
            "photo-container",
            "hashtag",
            'start-screen',
            'about-me'
          ]
        },
        "background-canvas",
        'main-footer',
      ]
    },
    "main"
  ],
  canvas:[
    "main",
    {
      name:"animations",
      components:[
        "redlines-in-the-darkness",
        "sarverott-meditation"
      ]
    }
  ],
  jquery:[
    "main",
    "background-canvas",
    "header-title",
    "send-form-message",
    "slider"
  ]
}
/*
var beforeLoad=[
  "js/jquery/main.js",
  "js/jquery/background-canvas.js",
  "js/vuejs/components/background-canvas.js",
  'js/vuejs/components/main-screen.js',
  'js/vuejs/components/main-footer.js',
  "js/vuejs/components/main-header.js",
  "js/vuejs/components/hashtag.js",
  "js/vuejs/components/main-theme.js",
  "js/vuejs/components/photo-box.js",
  "js/vuejs/components/article-theme.js",
  "js/vuejs/components/photo-box.js",
  "js/vuejs/components/photo-container.js",
  "js/vuejs/components/prototype-theme.js",
  "js/vuejs/main.js"
];
*/
function loadScriptsFromArray(elementToLoad, path){
  for(var k in elementToLoad){
    switch((elementToLoad[k]).constructor.name){
      case "String":
        (mode=="debug")?console.log("loadScriptsFromArray-string"):null;
        loadScript(path+elementToLoad[k]+".js");
      continue;
      case "Object":
      (mode=="debug")?console.log("loadScriptsFromArray-object"):null;
      loadScriptsFromArray(elementToLoad[k].components, path+elementToLoad[k].name+"/");
      continue;
      case "Array":
        (mode=="debug")?console.log("loadScriptsFromArray-array"):null;
        loadScriptsFromArray(elementToLoad[k], path+k+"/");
      continue;
    }
  }
}
function loadForMePleas(){
  loadScriptsFromArray(beforeLoad, "js/");
  loadNext();
}
loadForMePleas();
