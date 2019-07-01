<template>
  <div class="mine">
    <div class="header">
      <div class="hea_nav">
        <span class="nav_left">
          <img src="../../../static/img/set.png" alt>
        </span>
        <span class="nav_center">个人中心</span>
        <span class="nav_right">
          <img src="../../../static/img/news.png" alt>
        </span>
      </div>
      <div class="mine_img">
        <img :src="img" alt>
      </div>
      <p class="clicklogin">{{name==''?'点击登录':name}}</p>
    </div>
    <div class="keep">
      <img src="../../../static/img/keep.png" alt>
      <span>我的收藏</span>
    </div>
    <p class="line"></p>
    <div class="mine_order">
      <span class="mi_lf">我的订单</span>
      <span class="mi_rh">查看全部订单</span>
    </div>
    <div class="mi_list">
      <span>
        <img src="../../../static/img/icon_boligation.png" alt>
        <p>代付款</p>
      </span>
      <span>
        <img src="../../../static/img/prepare.png" alt>
        <p>代发货</p>
      </span>

      <span>
        <img src="../../../static/img/icon_consignee.png" alt>
        <p>待收货</p>
      </span>
      <span>
        <img src="../../../static/img/icon_evaluate.png" alt>
        <p>代评价</p>
      </span>
      <span>
        <img src="../../../static/img/icon_refund.png" alt>
        <p>退款/售后</p>
      </span>
      
    </div>
    <p class="line"></p>
    <div class="address">收货地址管理</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data() {
    return {
      img: "",
      name: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    if (localStorage.getItem("str") !== "") {
      this.name = localStorage.getItem("str");
      this.img = "../../../static/img/1.jpeg";
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.mine {
  background: #f3f3f3;
}

.header {
  height: 3.7rem;
  background: $bgcolor1;
  padding-top: 0.3rem;
}

.hea_nav {
  height: 1rem;
  display: flex;
  padding: 0 0.3rem;
}

.hea_nav span {
  flex: 1;
}

.nav_left {
  text-align: left;
  line-height: 0.75rem;
}

.nav_left img {
  width: 0.45rem;
  height: 0.45rem;
}

.nav_center {
  text-align: center;
  line-height: 1rem;
  font-size: 0.32rem;
  color: $bgcolor;
}

.nav_right {
  text-align: right;
  line-height: 0.75rem;
}

.nav_right img {
  width: 0.45rem;
  height: 0.45rem;
}

.mine_img {
  margin: 1.4rem auto 0;
  width: 1.8rem;
  height: 1.8rem;
  background: #ccc;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid $bgcolor;
  position: relative;
  z-index: 3;
}

.mine_img img {
  width: 100%;
  height: 100%;
}

.clicklogin {
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}

.keep {
  background: #fafafa;
  padding: 1.5rem 0.4rem 0;
  height: 1rem;
  line-height: 1rem;
}

.keep img {
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: middle;
}

.keep span {
  color: $sizecolor2;
  font-size: 0.3rem;
  margin-left: 0.2rem;
  vertical-align: middle;
}

.line {
  height: 0.1rem;
  background: #efeeee;
}

.mine_order {
  background: #fafafa;
  height: 1rem;
  line-height: 1rem;
  display: flex;
  border-bottom: 1px solid #ddd;
}

.mi_lf {
  flex: 1;
  margin-left: 0.5rem;
  font-size 0.3rem
}

.mi_rh {
  flex: 1;
  text-align: right;
  color: #ccc;
  margin-right: 5px;
  font-size 0.28rem
}

.mi_list {
  height: 1.9rem;
  display: flex;
  background: #fafafa;
}

.mi_list span {
  flex: 1;
  text-align: center;
}

.mi_list span img {
  width: 0.55rem;
  height: 0.5rem;
  margin: 0.4rem 0 0.2rem;
}

.mi_list span p {
  line-height: 0.6rem;
  font-size: 0.25rem;
  color: #bbb;
}

.address {
  height: 1.2rem;
  line-height: 1.2rem;
  padding-left: 0.5rem;
  color: #cdcdcd;
  background: #fafafa;
  font-size 0.3rem;
}
</style>
