<template>
  <div id="app">
    <!-- 头部组件 -->
    <Header :seller="seller"></Header>
    <!-- 导航区 -->
    <div class="tab border-1px">
      <router-link class="tab-item" to='/goods'>商品</router-link>
      <router-link class="tab-item" to='/ratings'>评论</router-link>
      <router-link class="tab-item" to='/seller'>商家</router-link>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from 'components/header/header'

const ERR_OK = 0
export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      seller: {}
    }
  },
  mounted () {
    this.getSellerData()
  },
  methods: {
    getSellerData () {
      this.$http.get('/api/seller')
        .then(res => {
          if (res.data.errno === ERR_OK) {
            this.seller = res.data.data
          }
          console.log(this.seller)
        })
    }
  }
}
</script>

<style lang='stylus'>
@import '../src/common/stylus/mixin.styl'
#app
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      font-size: 14px
      color: rgb(77, 85, 93)
    .active
      color: rgb(240, 20, 20)

</style>
