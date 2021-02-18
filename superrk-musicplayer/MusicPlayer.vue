<template>
  <div>
    <audio ref="audio" autoplay @ended="next"></audio>
    <button class="bg-blue-500 bg-opacity-100" @click="next"></button>
  </div>
</template>
<script>
import { post, get } from "./utils";
export default {
  data() {
    return {
      songs: [],
      index: 0,
      currentSong:{
          index:0,
          src:"",
          picurl:""
      }
    };
  },
  mounted(){
      this.getSong();
  },
  methods: {
    async next() {
        this.index++;
        let songresult = await get(`/song/url?id=${this.songs[this.index].id}`);
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
      let songresult = await get(`/song/url?id=${this.songs[0].id}`);
      this.$refs.audio.src = songresult.data[0].url;
    },
  },
};
</script>
<style>
audio {
  position: absolute;
  display: none;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>