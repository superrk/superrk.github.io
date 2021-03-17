<template>
  <div class="abstract-item" @click="$router.push(item.path)">
    <div class="img" v-if="index % 2 == 1">
      <img
        :src="
          'https://api.btstu.cn/sjbz/api.php?lx=fengjing&format=images&method=pc&index=' +
            index
        "
        alt=""
      />
    </div>
    <div>
      <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
      <PageInfo :pageInfo="item" :currentTag="currentTag"> </PageInfo>
    </div>
    <div class="img" v-if="index % 2 != 1">
      <img
        :src="
          'https://api.btstu.cn/sjbz/api.php?lx=fengjing&format=images&method=pc&index=' +
            index
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
import { RecoIcon } from "@vuepress-reco/core/lib/components";
import PageInfo from "./PageInfo";
export default {
  components: { PageInfo, RecoIcon },
  props: ["item", "currentPage", "currentTag", "index"],
};
</script>

<style lang="stylus" scoped>
.abstract-item
  display flex
  justify-content space-between
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:before,&:after
    box-sizing: inherit;
    content: '';
    position: absolute;
    border: 2px solid transparent;
    width: 0;
    height: 0;
  &:before
    top 0
    left 0
  &:after
    right 0
    bottom 0
  &:hover
    box-shadow: var(--box-shadow-hover)
    &:before,&:after
      width: 100%;
      height: 100%;
    &::before
      border-top-color #69f0ae
      border-right-color #69f0ae
      transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    &::after
      border-bottom-color #69f0ae
      border-left-color #69f0ae
      transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
  .img
    margin auto 20px auto 0
    width 45%
    overflow: hidden;
    border-radius .5rem
  img
    border-radius .5rem
    width 100%
    height 100%
    transform: scale(1.1);
    transition: .5s ease-out;
    &:hover
      transform: scale(1);
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
