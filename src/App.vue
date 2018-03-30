<template>
  <div id="app">
    <!-- 头部 -->
    <v-header :seller='seller'></v-header>
    <!-- 导航 -->
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
        </div>
      <div class="tab-item">
        <router-link to="/seller">商铺</router-link>
      </div>
    </div>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import header from 'components/header/header.vue';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {}
    };
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
        console.log(this.seller);
      }
    });
  },
  components: {
    'v-header': header
  }
};
</script>

<style scoped lang="stylus">
@import './common/stylus/mixin.styl'
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-1px(rgba(7,17,27,0.1))

  .tab-item {
    flex: 1;
    text-align: center;
    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77,85,93);
      &.active {
        color rgb(240,20,20)
      }
    }
  }
}
</style>
