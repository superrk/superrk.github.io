<template>
  <div>
    <audio ref="audio" autoplay @ended="next" @timeupdate="timeUpdate"></audio>
    <div v-if="currentSong.picUrl" class="lyric">
      <div
        v-if="currentSong.picUrl"
        id="song"
        @click="sleep = !sleep"
        :class="{ sleep: sleep }"
      >
        <img :src="currentSong.picUrl" alt="pic" />
      </div>
      <div
        v-show="!sleep"
        class="music_dis"
        :style="{ backgroundImage: 'url(' + currentSong.picUrl + ')' }"
      >
        <div
          class="music_shlter"
          :style="{ backgroundImage: 'url(' + currentSong.picUrl + ')' }"
        ></div>
        <div class="music-title">{{ currentSong.name }}</div>
        <div class="music-title">{{ currentSong.singer }}</div>
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
        <div style="display: flex">
          <div
            class="play"
            @click="changePlay"
            :class="{ pause: playing }"
          ></div>
          <progress
            class="process"
            @click="progress"
            :value="health"
            max="100"
          ></progress>
        </div>
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
      sleep: true,
      songs: [],
      index: 0,
      currentSong: {},
      health: 0,
      playing: true,
      lyrics: [],
      currentReverseIndex: 0,
    };
  },
  mounted() {
    this.getSong();
  },
  methods: {
    changePlay() {
      let pause = this.$refs.audio.paused;
      pause ? this.$refs.audio.play() : this.$refs.audio.pause();
      this.playing = pause;
    },
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
      let playListDetail = await get("/playlist/detail?id=149539021");
      let trackIds = playListDetail.playlist.trackIds
        .map((item) => item.id)
        .join(",");
      let songsresult = await post("/song/detail", { ids: trackIds });
      this.songs = songsresult.songs.map((item) => {
        return {
          ...item.al,
          id: item.id,
          name: item.name,
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
    progress(e) {
      let value = e.offsetX / 200;
      this.$refs.audio.currentTime = (this.$refs.audio.duration)*value
    },
    timeUpdate(e) {
      this.health = (e.target.currentTime / e.target.duration) * 100;
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
    padding: 0em
    margin: auto 1.2em
    li
      list-style: none
      font-size: 12px
      margin-top: 5px
      min-height: 18px
  .music_dis
    width: 100%
    height: 240px
    position: relative
    border-radius: 9%
  .music_words_box
    width: 100%
    height: auto
    position: absolute
    top: 0
    transition: all 0.5s
#song
  position: fixed
  z-index: 2
  transition: all 0.5s
  right: 288px
  display: block
  &.sleep
    right: -30px
    bottom: 240px
    &:hover
      right: 5px
  img
    height: 50px
    width: 50px
    border-radius: 50%
    box-shadow: 0 5px 18px rgb(0 0 0 / 20%)
    animation: changDeg 10s linear 3s infinite
.music_shlter
  width: 100%
  height: 240px
  position: absolute
  filter: blur(10px)
  background-size: 100% 100%
  transition: all 0.5s
  z-index: unset
.music-title
  color: rgba(255, 255, 255, 0.6)
  text-align: center
  position: relative
  line-height: 1.7
.play
  position: relative
  margin-left: 10px
.process
  position: relative
  width: 200px
  height: 3px
  margin: auto 10px
  background: #121212
.play
  background: url('./img/play.png')
  background-size: 100% 100%
  height: 28px
  width: 28px
  &.pause
    background: url('./img/pause.png')
    background-size: 100% 100%
</style>