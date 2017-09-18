<template>
    <div>
        <p>123</p>
        <ul>
            <li>
               <p>{{books.count}}</p>
               <p>{{books.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      books: {}
    }
  },
  created() {
    this.$http.jsonp('https://api.douban.com/v2/book/1220562')
      .then((res) => {
        console.log(res.data)
        // console.log(res.data.subjects)
        this.books = res.data
      }).catch((res) => {
        console.log('有错误')
      })
  }
}
</script>

<style scoped lang="stylus">

</style>
