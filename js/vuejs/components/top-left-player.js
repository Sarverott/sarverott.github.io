Vue.component("top-left-player", {
  props:['config'],
	//  data:
  methods:{
    playMusic:function(){

    },
    pauseMusic:function(){

    },
    nextTrack:function(){

    },
    prevTrack:function(){

    }
  },
  data:function(){
    return {

    };
  },
  ready:function(){

  },/*
  data:function(){
    return {
      //id:canvasId,
      //time:time,
      animationHook:null
    };
  },*/
  template: `
    <div class="top-left-player">
      <div id="player"></div>
      <div class="player-controlls">
        <div class="acting-buttons-box">
          <div class="player-act-button prev" @click="prevTrack()">
            |<
          </div>
          <div class="player-act-button pause" @click="pauseMusic()">
            ||
          </div>
          <div class="player-act-button play" @click="playMusic()">
            >
          </div>
          <div class="player-act-button next" @click="nextTrack()">
            >|
          </div>
        </div>
        <div class="">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </div>
        <div class="track-title">

        </div>
        <div>
      </div>
    </div>
  `
});
<!DOCTYPE html>
<html>
  <body>
    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->


    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    </script>
  </body>
</html>
