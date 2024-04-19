var dataContainer = {
  events:[],
  general:null,
  repos:[],
  gists:[],
  description:"",
  stars:[]
};

function SAVE_CACHE(label){
  localStorage.setItem(label, JSON.stringify(dataContainer[label]));
  localStorage.setItem(`${label}_exp`, (Date.now()+3600000));
}
function GET_DATA(){
  READ_FILE("https://raw.githubusercontent.com/Sarverott/Sarverott/master/description.txt", "description")
  LOAD_DATA("https://api.github.com/users/sarverott", "general");
  LOAD_DATA("https://api.github.com/users/sarverott/repos", "repos");
  LOAD_DATA("https://api.github.com/users/sarverott/gists", "gists");
  LOAD_DATA("https://api.github.com/users/sarverott/events", "events");
  LOAD_DATA("https://api.github.com/users/sarverott/stars", "stars");
}

function LOAD_DATA(url, dataLabel){
  var cache=localStorage.getItem(`${dataLabel}_exp`);
  if(cache && Date.now()<parseInt(cache)){
    dataContainer[dataLabel]=JSON.parse(localStorage.getItem(dataLabel));
  }else{
    fetch(
      url,
      {method: 'get'}
    ).then(
      response => response.json()
    ).then(
      jsonData => {
        dataContainer[dataLabel]=jsonData;
        SAVE_CACHE(dataLabel);
      }
    ).catch(err => {
      console.error(err);
    });
  }
}

var settDataDisplayer = new Vue({
  el: '#root',
  data: dataContainer
});

function READ_FILE(url, dataLabel){
  fetch(url,{
    method:'get'
  }).then(
    response => response.text()
  ).then(content=>{
    dataContainer[dataLabel]=content;
    SAVE_CACHE_LOADINGS();
  }).catch(err => {
    console.error(err);
  });
}

GET_DATA();
