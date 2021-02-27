<template>
  <div>
    <audio ref="audio" autoplay @ended="next" @timeupdate="timeUpdate"></audio>
    <div v-if="currentSong.picUrl" class="lyric">
      <div v-if="currentSong.picUrl" id="song" @click="debounceNext">
        <img :src="currentSong.picUrl" alt="pic" />
      </div>
      <div
        class="music_dis"
        :style="{ backgroundImage: 'url(' + currentSong.picUrl + ')' }"
      >
        <div
          class="music_shlter"
          :style="{ backgroundImage: 'url(' + currentSong.picUrl + ')' }"
        ></div>
        <ul class="music_words">
          <div
            class="music_words_box"
            :style="{
              top: 67.5 - (lyrics.length - currentReverseIndex - 1) * 25 + 'px',
            }"
          >
            <li
              v-for="(lyric, index) in lyrics"
              :key="index"
              :class="{
                active: index == lyrics.length - currentReverseIndex - 1,
              }"
            >
              {{ lyric.word }}
            </li>
          </div>
        </ul>
      </div>
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
      lyrics: [],
      currentReverseIndex: 0,
    };
  },
  mounted() {
    this.getSong();
  },
  methods: {
    debounceNext: debounce(function () {
      this.next();
    }, 200),
    pause() {
      this.$refs.audio.pause();
    },
    async next() {
      this.index++;
      if (this.index >= this.songs.length) {
        this.index = 0;
      }
      this.currentSong = this.songs[this.index];
      this.$refs.audio.pause();
      let songresult = await get(`/song/url?id=${this.currentSong.id}`);
      await this.getLyric();
      this.$refs.audio.src = songresult.data[0].url;
    },
    async getSong() {
      let playListDetail = await get("/playlist/detail?id=2606073712");
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
      let songresult = await get(`/song/url?id=${this.currentSong.id}`);
      await this.getLyric();
      this.$refs.audio.src = songresult.data[0].url;
    },
    async getLyric() {
      let lyricRes = await get(`/lyric?id=${this.currentSong.id}`);
      let lyric = lyricRes.nolyric ? "" : lyricRes.lrc.lyric.trim();
      lyric = lyric.split("\n");
      let list = [];
      lyric.forEach((line) => {
        let index = line.indexOf("]");
        list.push({
          time: line.substring(1, index),
          word: line.substring(index + 1, line.length),
        });
      });
      this.lyrics = list;
    },
    timeUpdate(e) {
      let lyrics = JSON.parse(JSON.stringify(this.lyrics));
      lyrics.reverse().some((item, index) => {
        let time = item.time;
        time =
          parseInt(time.split(":")[0] * 60) + parseFloat(time.split(":")[1]);
        if (e.target.currentTime >= time) {
          if (this.currentReverseIndex != index) {
            this.currentReverseIndex = index;
          }
          return true;
        }
      });
    },
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
.active
  color: green
.lyric
  position: fixed
  z-index: 500
  bottom: 2.5rem
  right: 4rem
  .music_words
    width: 240px
    height: 160px
    color: hsla(0, 0%, 100%, 0.6)
    text-align: center
    overflow: hidden
    position: relative
    background-size: 100% 100%
    line-height: 1.7
    li
      list-style: none
      font-size: 12px
      margin-top: 5px
      min-height: 18px
  .music_dis
    width: 100%
    height: 240px
    position: relative
  .music_words_box
    width: 100%
    height: auto
    position: absolute
    top: 0
    transition: all 0.5s
#song
  position: fixed
  bottom: 240px
  z-index: 2;
  right: 290px
  display: block
  img
    height: 50px
    width: 50px
    border-radius: 50%
    box-shadow: 0 5px 18px rgb(0 0 0 / 20%)
    animation: changDeg 10s linear 3s infinite
  &:hover
    right: 5px
.music_shlter
  width: 100%
  height: 100%
  position: absolute
  filter: blur(10px);
  background-size: 100% 100%
  transition: all 0.5s
  z-index: unset;
</style>