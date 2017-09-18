<template>
  <div id="app" >
    <m-header></m-header>
    <tab></tab>
    <carousel/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from './components/tab/tab'
  import Carousel from './base/carousel/carousel'

  export default {
    components: {
      name: 'All',
      MHeader,
      Tab,
      Carousel
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>