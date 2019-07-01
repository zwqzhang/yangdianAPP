<template>
  <div class="index">
    <router-view class="view"></router-view>
    <div class="navfoot">
      <router-link to="/index/home" activeClass="select">
        <img
          class="navimg"
          :src="path=='/home'?'../../../static/img/tab_home_hig.png':'../../../static/img/tab_home_nor.png'"
        >
        <div class="navtext">首页</div>
      </router-link>
      <router-link to="/index/classify" activeClass="select">
        <img
          class="navimg"
          :src="path=='/classify'?'../../../static/img/tab_menu_hig.png':'../../../static/img/tab_menu_nor.png'"
        >
        <div class="navtext">分类</div>
      </router-link>
      <router-link to="/index/shopcar" activeClass="select">
        <img
          class="navimg"
          :src="path=='/shopcar'?'../../../static/img/tab_shopping_hig.png':'../../../static/img/tab_shopping_nor.png'"
        >
        <div class="navtext">购物车</div>
      </router-link>
      <router-link to="/index/mine" activeClass="select">
        <img
          class="navimg"
          :src="path=='/mine'?'../../../static/img/tab_me_hig.png':'../../../static/img/tab_me_nor.png'"
        >
        <div class="navtext">我的</div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import $ from "jquery";
export default {
  components: {},
  props: [],
  data() {
    return {
      istrue: true,
      path: ""
    };
  },
  watch: {
    $route() {
      this.path = this.$route.path.substr(6, 9);
    }
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.index {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.view {
  flex: 1;
}

.navfoot {
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 3;
  background: $bgcolor;
  display: flex;
  border-top 1px solid #ddd;
}

a {
  flex: 1;
  text-align: center;
  padding: 0.15rem 0.1rem 0.1rem;
}

a .navimg {
  width: 0.38rem;
  height: 0.36rem;
}

a .navtext {
  margin-top: 0.1rem;
  font-size: 0.22rem;
}

.select {
  color: $bgcolor1;
}
</style>
