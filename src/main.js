
document.querySelector('#root').innerHTML = `
  <!-- header -->
      <header id="the-head" class="fixed-top d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img class="sett-main-header-logo" src="https://avatars.githubusercontent.com/u/29676193" alt="">
          <span class="fs-4 sett-main-header-name">Sett Sarverott</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item"><a href="#projects" class="nav-link">Repositories</a></li>
          <li class="nav-item"><a href="#faqs" class="nav-link">Gists</a></li>
          <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
        </ul>
      </header>
      <!-- content -->
      <main id="sett-preview">
        <!-- content -->
        <div class="row">
          <!-- content -->
          <aside  class="d-none d-xl-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 380px;">
            <span class="fs-5 fw-semibold">Last actions</span>
            <div id="first-module" class="list-group list-group-flush border-bottom scrollarea">
              <a :href="'https://github.com/'+event.repo.name" v-for="event in events" class="list-group-item list-group-item-action py-3 lh-sm">
                <div class="d-flex w-100 align-items-center justify-content-between">
                  <strong class="mb-1">
                    {{event.type}}
                  </strong>
                  <small class="text-body-secondary">
                    {{(new Date(event.created_at)).toDateString()}}
                  </small>
                </div>
                <div class="col-10 mb-1 small">
                  {{event.repo.name}}
                </div>
              </a>
            </div>
          </aside>
          <!-- content -->
          <section class="col-9 container col-xxl-8 px-4 py-5">
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div class="col-10 col-sm-8 col-lg-6">
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sarverott&langs_count=8&theme=dark&layout=compact&text_color=888888" class="d-block mx-lg-auto img-fluid" alt="electronical circuit form microproject" width="700" height="500" loading="lazy">
              </div>
              <div class="col-lg-6">
                <h1 v-if="general" class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                  {{general.bio}}
                </h1>
                <p class="lead">
                  {{description}}
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a href="https://github.com/sarverott" target="_blank">
                    <button type="button" class="btn btn-light btn-lg px-4 me-md-2">Github</button>
                  </a>
                  <a href="https://www.npmjs.com/~sarverott" target="_blank">
                    <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">NPM</button>
                  </a>
                  <a href="https://pypi.org/user/sarverott/" target="_blank">
                    <button type="button" class="btn btn-primary btn-lg px-4">PyPi</button>
                  </a>
                  <a href="https://hub.docker.com/u/sarverott" target="_blank">
                    <button type="button" class="btn btn-info btn-lg px-4">DockerHub</button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <!-- content -->
        </div>
        <!-- content -->
        <div class="d-flex justify-content-center py-3">
          <a href="#repos"><h3 id="repos"> Repositories </h3></a>
        </div>
        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div v-for="repo in repos" v-if="!repo.archived" class="col">
                <div class="card shadow-sm">
                  <img
                    :src="'https://github-readme-stats.vercel.app/api/pin?username='+repo.owner.login+'\&repo='+repo.name+'\&title_color=fff\&icon_color=f9f9f9\&text_color=9f9f9f\&bg_color=151515\&show_owner=true'"
                    alt="repo.full_name"
                  >
                  <div class="card-body">
                    <h6></h6>
                    <p class="card-text">{{repo.description}}</p>
                    <div class="row sett-repo-card-buttons-box">
                      <img class="col" :src="'https://img.shields.io/github/watchers/'+repo.owner.login+'/'+repo.name+'?link=https%3A%2F%2Fgithub.com%2F'+repo.owner.login+'%2F'+repo.name+'%23repository-details-watch-button'">
                      <img class="col" :src="'https://img.shields.io/github/forks/'+repo.owner.login+'/'+repo.name+'?link=https%3A%2F%2Fgithub.com%2F'+repo.owner.login+'%2F'+repo.name+'%23fork-button'">
                      <img class="col" :src="'https://img.shields.io/github/stars/'+repo.owner.login+'/'+repo.name+'?link=https%3A%2F%2Fgithub.com%2F'+repo.owner.login+'%2F'+repo.name+'%23repo-stars-counter-star'">
                    </div>
                    <div class="row sett-repo-card-buttons-box">
                      <img class="col" :src="'https://img.shields.io/github/last-commit/'+repo.owner.login+'/'+repo.name+'/master'">
                      <img class="col" :src="'https://img.shields.io/github/commit-activity/t/'+repo.owner.login+'/'+repo.name+'?style=for-the-badge&label=TOTAL%20commits%20count'">
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a target="_blank" :href="repo.html_url">
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        </a>
                        <a target="_blank" :href="repo.git_url">
                          <button type="button" class="btn btn-sm btn-outline-secondary">Clone with GIT</button>
                        </a>
                      </div>
                      <small class="text-body-secondary">{{repo.language}}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content -->
        <div class="d-flex justify-content-center py-3">
          <a href="#repos"><h3 id="repos"> Gists </h3></a>
        </div>
        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div  v-for="gist in gists" class="col">
                <div class="card shadow-sm">
                  <div class="card-body">
                    <p class="card-text">{{gist.description}}</p>
                    <table class="table table-striped">
                      <tr>
                        <th>filename</th>
                        <th>language</th>
                        <th>size</th>
                      </tr>
                      <tr v-for="file in gist.files">
                        <td>
                          <a target="_blank" :href="file.raw_url">
                            {{file.filename}}
                          </a>
                        </td>
                        <td>{{file.language}}</td>
                        <td>{{file.size}}</td>
                      </tr>
                    </table>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a :href="gist.html_url" target="_blank">
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        </a>
                      </div>
                      <small class="text-body-secondary">{{(new Date(gist.created_at)).toDateString()}}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!-- content -->
      <div class="container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <img src="https://avatars.githubusercontent.com/u/29676193?size=64">
            </a>
            <p class="text-body-secondary">{{general.name}} © {{(new Date(general.created_at)).getFullYear()}} - {{(new Date(general.updated_at)).getFullYear()}}</p>
          </div>

          <div class="col mb-3">

          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
          </div>
        </footer>
      </div>
`
import './style.css'


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
