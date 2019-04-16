var mode="norm";
var listenerArray=[];
var listenerNames=[];
function loadNext(){
  //console.log("loadScript");
  var tmp=listenerArray.pop();
  if(typeof(tmp)!="undefined"){
    tmp();
  }else{
    loadingScreen("hide");
  }
  (mode=="debug")?console.log(listenerNames.pop()):null;
  (mode=="debug")?console.log("LOADING"):null;
}
/*
**
** BEG https://gist.github.com/Sarverott/abfa3442aa90afb97fb0fdb4e3f08025
*/
function randomString(len=9, matrix='qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM_-.#@'){
	var ret='';
	for(var i=0;i<len;i++){
		ret+=matrix.charAt(Math.floor(Math.random()*matrix.length));
	}
	return ret;
}
/*
** END https://gist.github.com/Sarverott/abfa3442aa90afb97fb0fdb4e3f08025
**
*/
function validateEmail(email){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function loadScript(path){
  listenerNames.unshift(path);
  listenerArray.unshift(function(){
    var script=document.createElement('script');
    script.src=path;
    document.head.appendChild(script);
  });
}
var beforeLoad={
  settings:[
    "localizations",
    "general",
    "header",
    "emails",
    "footer",
    "elsebutton",
    "categories",
    "background",
    "phones",
    "socialmedia",
    "slider",
    "about"
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
            "search-results",
            "docs-display",
            'start-screen',
            'about-me',
            "error404"
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
        "squareNoise",
        "square-pattern-shades",
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
  loadScriptsFromArray(beforeLoad, "https://sarverott.github.io/js/");
  loadNext();
}
function base64encrypt(content, key="okon--2137-->.<"){
  content=btoa(content);
  key=btoa(key);
  var matrix="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var toCryptLen=(content.substring(content.length-2)=="==")?content.length-2:content.length;
  var cryptKeyLen=(key.substring(key.length-2)=="==")?key.length-2:key.length;
  var output="";
  for(var i=0;i<toCryptLen;i++){
    var contentChar=content.charAt(i);
    var contentCurrentChar=0;
    for(var j=0;j<matrix.length;j++){
      if(matrix.charAt(j)==contentChar){
        contentCurrentChar=j;
        break;
      }
    }
    var keyChar=key.charAt(i%key.length);
    var keyCurrentChar=0;
    for(var j=0;j<matrix.length;j++){
      if(matrix.charAt(j)==keyChar){
        keyCurrentChar=j;
        break;
      }
    }
    output+=matrix.charAt((contentCurrentChar+keyCurrentChar)%matrix.length);
  }
  output+=(content.substring(content.length-2)=="==")?"==":"";
  return output;
}
loadForMePleas();
