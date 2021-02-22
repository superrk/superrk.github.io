<template>
  <div>
    <audio ref="audio" autoplay @ended="next"  @timeupdate="timeUpdate"></audio>
    <div id="song" @click="debounceNext">
      <img v-if="currentSong.picUrl" :src="currentSong.picUrl" alt="pic" />
    </div>
  </div>
</template>
<script>
import debounce from "lodash/debounce";
import { post, get } from "./utils";
export default {
  data() {
    return {
      songs: [],
      index: 0,
      currentSong: {},
    };
  },
  mounted() {
    this.getSong();
  },
  methods: {
    debounceNext: debounce(function () {
      this.next();
    }, 200),
    async next() {
      this.index++;
      if (this.index >= this.songs.length) {
        this.index = 0;
      }
      this.currentSong = this.songs[this.index];
      this.$refs.audio.pause();
      let songresult = await get(`/song/url?id=${this.currentSong.id}`);
      this.$refs.audio.src = songresult.data[0].url;
    },
    async getSong() {
      let result = await post("/top/playlist?limit=1&cat=华语", {});
      let playListId = result.playlists[0].id;
      let playListDetail = await post("/playlist/detail", { id: playListId });
      let trackIds = playListDetail.playlist.trackIds
        .map((item) => item.id)
        .join(",");
      let songsresult = await post("/song/detail", { ids: trackIds });
      this.songs = songsresult.songs.map((item) => {
        return {
          ...item.al,
          id: item.id,
          singer: item.ar[0].name,
        };
      });
      this.currentSong = this.songs[0];
      let songresult = await get(`/song/url?id=${this.songs[0].id}`);
      this.$refs.audio.src = songresult.data[0].url;
      
    },
    timeUpdate(e){
      console.log(e.target.currentTime/e.target.currentTime.duration)
    }
  },
};
</script>
<style lang="stylus" scoped>
@keyframes changDeg
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
audio
  position: absolute
  display: none
  bottom: 0
  left: 0
  width: 100%
#song
  position: fixed
  bottom: 40px
  right: -25px
  display: block
  img
    height: 50px
    width: 50px
    border-radius: 50%
    box-shadow: 0 5px 18px rgb(0 0 0 / 20%)
    animation: changDeg 3.5s linear 3s infinite
  &:hover
    right: 5px
</style>