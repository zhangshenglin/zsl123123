<template>
  <div>
    <p class="top">豆瓣电影TOP250</p>
    <p class="hr" v-bind:style="{ background: activeColor }"></p>
    <div class="loading-container" v-show="!items.length">
      <img width="24" height="24" class="loadingimg" src="../../common/image/loading.gif" alt="">
    </div>
    <ul>
      <li v-for="item in items" class="item">

        <div class="icon">
          <img width="60" height="60" v-lazy="item.images.small">
        </div>
        <div class="text">
          <h2 class="name" v-html="item.title"></h2>
          <p class="desc">评分：{{item.rating.average}}分</p>
        </div>
        <div class="year">
          <P>于{{item.year}}年上映</P>
        </div>

        <!-- <h1 class="title">{{item.title}}</h1>
                        <P>{{item.year}}</P>
                        <img :src="item.images.small" alt="item.title">
                        <p>评分：{{item.rating.average}}分</p> -->
      </li>

      <hr>
    </ul>

  </div>
</template>

<script type="text/ecmascript-6">
// import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
export default {
  data() {
    return {
      activeColor: '#ffcd32',
      items: []
    }
  },
  created() {
    this.$http.jsonp('http://api.douban.com/v2/movie/top250')
      .then((res) => {
        console.log(res.data)
        console.log(res.data.subjects)
        this.items = res.data.subjects
      }).catch((res) => {
        console.log('有错误')
      })
  }
}
</script>

<style scoped lang="stylus">
.hr
  width: 100%
  height:2px
  margin-bottom: 10px
.top
  text-align: center
  padding: 20px 0px
  color: #ffcd32
  font-family: 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif, 'Droid Sans Fallback'
.item
  display: flex
  box-sizing: border-box
  align-items: center
  padding: 0 20px 20px 20px
  .icon
    flex: 0 0 60px
    width: 60px
    padding-right: 20px
  .text
    display: flex
    flex-direction: column
    justify-content: center
    flex: 1
    line-height: 20px
    overflow: hidden
    font-size: 14px
    .name
      margin-bottom: 10px
      color: red
    .desc
      color: #fff
  .year
    font-size: 12px
.loading-container
  text-align:center
</style>