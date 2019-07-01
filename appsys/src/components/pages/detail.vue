<template>
  <div class="detail">
    <div class="box"></div>
    <div class="banner">
      <mt-swipe>
        <mt-swipe-item v-for="(item,index) in swiperImgArr" :key="index">
          <img :src="item" alt>
        </mt-swipe-item>
      </mt-swipe>
      <div class="detailnav">
        <div class="navback">
          <v-back class="back"></v-back>
        </div>
        <div class="toshop" @touchend="$router.push('/index/shopcar')">
          <img src="../../../static/img/icon_shopping.png" alt>
        </div>
        <div class="more">
          <img src="../../../static/img/icon_menu.png" alt>
        </div>
      </div>
    </div>

    <div class="msg">
      <div class="msgtitle">
        <p>{{name}}</p>
        <span>
          <img src="../../../static/img/shoucang.jpg" alt>
        </span>
      </div>
      <div class="discount">
        <span class="price">￥{{reduct_price}}.00</span>
        <span class="package">{{(allowance*10).toFixed(1)}}折</span>
        <span class="package">{{isFreeShip==true?'包邮':'不包邮'}}</span>
      </div>
      <div class="old">
        <span class="oldprice">￥{{original_price}}.00</span>
        <span class="trans" v-for="(item,index) in describe" :key="index">{{item}}</span>
        <!-- <span class="trans">正品货源</span> -->
      </div>
    </div>
    <div class="fenxi"></div>
    <div class="addcar">
      <div class="text">总价:</div>
      <div class="text_right">
        <span class="add_price">￥{{allprice.toFixed(2)}}</span>
        <span class="add_shop" @click="isclosemask()">加入购物车</span>
        <span class="add_buy">立即购买</span>
      </div>
    </div>
    <div class="mask" v-if="open" @click.self="closeself()"></div>
    <div class="buycard">
      <div class="poimg">
        <img :src="swiperImgArr[0]" alt>
      </div>
      <div class="b_top">
        <div class="top_left">
          <p class="left_price">￥{{reduct_price}}.00</p>
          <p>库存{{total}}件</p>
          <p>请选择商品属性</p>
        </div>
        <div class="top_right">
          <span @click="closemask()">
            <img src="../../../static/img/close.png" alt>
          </span>
        </div>
      </div>
      <div class="b_con">
        <div class="con_num">
          <span class="num_left">购买数量</span>
          <span class="num_right">
            <span @click="subtract()">-</span>
            <input type="number" v-model="num">
            <span @click="add()">+</span>
          </span>
        </div>
      </div>
      <!-- <p class="size_title">年龄</p>
           <div class="size">
            <span>5岁以下</span>
            <span>3岁以下</span>
      </div>-->
      <div class="b_foot">
        <p class="size_title">{{obj1.name}}</p>
        <div class="size">
          <span
            v-for="(subitem,subi) in obj1.list"
            :key="subi"
            :class="subi==i1?'spanselect':''"
            @click="spanselect1(subi)"
          >{{subitem}}</span>
        </div>
        <p class="size_title">{{obj2.name}}</p>
        <div class="size">
          <span
            v-for="(subitem,subi) in obj2.list"
            :key="subi"
            :class="subi==i2?'spanselect':''"
            @click="spanselect2(subi)"
          >{{subitem}}</span>
        </div>
      </div>
      <div class="surebtn" @touchend="toshopcar()">确定</div>
    </div>
    <div class="shopdiv">
      <span>
        <router-link :to="'/detail/'+id+'/comimg'" activeClass="select">商品详情</router-link>
      </span>
      <span>
        <router-link :to="'/detail/'+id+'/praise'" activeClass="select">买家口碑</router-link>
      </span>
    </div>
    <div class="shopdetail">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vBack from "../common/back";
import API from "../../common/js/API";
import { Swipe, SwipeItem } from "mint-ui";
import { Toast } from "mint-ui";
import $ from "jquery";
export default {
  components: {
    vBack
  },
  props: [],
  data() {
    return {
      num: 1,
      id: "",
      swiperImgArr: [],
      describe: [],
      name: "",
      allowance: 0,
      original_price: "",
      reduct_price: "",
      isFreeShip: true,
      shopDes: [],
      total: "",
      buySelect: [],
      open: false,
      allprice: 0.0,
      i1: 0,
      i2: 0,
      obj1: {},
      obj2: {},
      buyerReviews: null,
      toshoparr: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    closeself() {
      this.open = false;
      $(".buycard").css("bottom", "-10rem");
    },
    closemask() {
      this.open = false;
      $(".buycard").css("bottom", "-10rem");
    },
    add() {
      this.num++;
      this.allprice = this.num * this.reduct_price;
    },
    subtract() {
      this.num--;
      if (this.num <= 0) {
        this.num = 1;
      }
      this.allprice = this.num * this.reduct_price;
    },
    spanselect1(a) {
      this.i1 = a;
    },
    spanselect2(a) {
      this.i2 = a;
    },
    isclosemask() {
      $(".buycard").css("bottom", "1rem");
      this.open = true;
    },
    toshopcar() {
      // this.$store.state.shopcararr
      var obj = {
        id: this.id,
        img: this.swiperImgArr[0],
        name: this.name,
        num: this.num,
        reduct_price: this.reduct_price,
        isshow: false
      };
      this.$store.dispatch("setshop", obj);
      Toast({
        message: "加入购物车成功",
        position: "middle",
        duration: 3000
      });
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.$http({
      url: API.getDetail,
      method: "get",
      params: {
        pid: this.$route.params.id
      }
    }).then(d => {
      console.log(d);
      this.name = d.data.data.name;
      this.swiperImgArr = d.data.data.swiperImgArr;
      this.describe = d.data.data.describe;
      this.allowance = d.data.data.allowance;
      this.original_price = d.data.data.original_price;
      this.reduct_price = d.data.data.reduct_price;
      // 商品详情图片
      this.shopDes = d.data.data.shopDes;
      this.$store.dispatch("setArr", this.shopDes);
      this.isFreeShip = d.data.data.isFreeShip;
      this.total = d.data.data.total;
      // 加入购物车选择
      this.buySelect = d.data.data.buySelect;
      this.obj1 = this.buySelect[0];
      this.obj2 = this.buySelect[1];
      // 评价
      this.buyerReviews = d.data.data.buyerReviews;
      this.$store.dispatch("setbuyer", this.buyerReviews);
      this.allprice = this.num * this.reduct_price;
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.banner {
  width: 100%;
  height: 5.4rem;
  position: relative;
}

.box {
  height: 0.3rem;
  background: $bgcolor1;
}

.mint-swipe-item img {
  width: 100%;
  height: 100%;
}

.banner>>> .mint-swipe-indicators .is-active {
  background: $bgcolor1;
  opacity: 0.5;
}

.detailnav {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.75rem;
  line-height: 0.75rem;
}

.detailnav div {
  width: 0.58rem;
  height: 0.58rem;
  display: inline-block;
  background: #b2b2b2;
  border-radius: 50%;
  text-align: center;
  line-height: 0.58rem;
}

.navback {
  position: absolute;
  left: 0.2rem;
  top: 0.08rem;
}

.detailnav img {
  vertical-align: middle;
}

.navback>>> .img img {
  margin-top: -0.1rem;
}

.toshop {
  position: absolute;
  right: 1rem;
  top: 0.08rem;
}

.toshop img {
  width: 0.3rem;
  height: 0.3rem;
  margin-top: -0.1rem;
}

.more {
  position: absolute;
  right: 0.2rem;
  top: 0.08rem;
}

.more img {
  width: 0.3rem;
  height: 0.1rem;
  margin-top: -0.1rem;
}

.msg {
  height: 1.8rem;
}

.msgtitle {
  height: 0.9rem;
  display: flex;
}

.msgtitle p {
  flex: 1;
  padding: 0.1rem 0.3rem;
  line-height: 0.35rem;
  font-size: 0.28rem;
}

.msgtitle span {
  width: 0.9rem;
}

.msgtitle span img {
  width: 100%;
  height: 100%;
}

.discount {
  height: 0.35rem;
  padding: 0 0.3rem;
}

.discount span {
  display: inline-block;
}

.price {
  color: $sizecolor1;
  font-size: 0.3rem;
}

.package {
  background: $bgcolor1;
  height: 0.3rem;
  padding: 0 0.05rem;
  margin-left: 0.2rem;
  line-height: 0.3rem;
  color: $bgcolor;
  font-size: 0.2rem;
}

.old {
  margin-top: 0.1rem;
  padding: 0 0.3rem;
}

.old span {
  display: inline-block;
}

.oldprice {
  color: #ccc;
  font-size: 0.25rem;
  text-decoration: line-through;
  margin-right: 0.3rem;
}

.trans {
  font-size: 0.22rem;
  color: $bgcolor1;
  border: 1px solid $bgcolor1;
  padding: 0.02rem;
  margin: 0 0.05rem;
}

.fenxi {
  height: 0.28rem;
  background: $bgcolor2;
}

.shopdetail {
  padding: 0 0.3rem;
  margin-bottom: 1rem;
}

.shopdiv {
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  padding: 0 0.3rem;
  margin-bottom: 0.2rem;
  border-top: 0.001rem solid #ccc;
  border-bottom: 0.001rem solid #ccc;
}

.shopdiv span {
  height: 0.5rem;
  flex: 1;
  text-align: center;
}

.shopdiv span a {
  padding: 0.1rem 0.3rem;
  color: $sizecolor3;
  font-size: 0.32rem;
}

.shopdiv span .select {
  color: $bgcolor1;
  border-bottom: 2px solid $bgcolor1;
}

.addcar {
  width: 100%;
  height: 1rem;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  background: $bgcolor;
  line-height: 1rem;
  text-align: center;
  z-index: 5;
}

.text {
  width: 1.2rem;
  height: 1rem;
  color: $sizecolor3;
  font-size: 0.34rem;
}

.text_right {
  flex: 1;
  display: flex;
}

.text_right span {
  flex: 1;
}

.add_price {
  text-align: left;
  color: $sizecolor1;
  font-size: 0.3rem;
}

.add_shop {
  background: $bgcolor1;
  color: $bgcolor;
  font-size: 0.3rem;
}

.add_buy {
  background: $sizecolor1;
  color: $bgcolor;
  font-size: 0.3rem;
}

.mask {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}

.buycard {
  width: 100%;
  // height: 5.8rem;
  background: $bgcolor;
  position: fixed;
  left: 0;
  bottom: -10rem;
  transition: 0.3s;
}

.b_top {
  height: 2.1rem;
  display: flex;
}

.top_left {
  padding: 0.4rem 0 0.4rem 3rem;
  line-height: 0.4rem;
  flex: 1;
  text-align: left;
  font-size: 0.26rem;
  color: $sizecolor2;
}

.left_price {
  color: $sizecolor1;
  font-size: 0.3rem;
}

.top_right {
  width: 1.1rem;
  // background: red;
  text-align: center;
}

.poimg {
  width: 2rem;
  height: 2rem;
  border: 5px solid $bgcolor2;
  border-radius: 5px;
  position: absolute;
  left: 0.4rem;
  top: -0.3rem;
}

.poimg img {
  width: 2.1rem;
  height: 2.1rem;
  margin-left: -2px;
}

.top_right img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.2rem;
}

.b_con {
  padding: 0 0.4rem;
}

.con_num {
  width: 100%;
  height: 0.5rem;
  display: flex;
}

.num_left {
  flex: 1;
  font-size: 0.32rem;
}

.num_right {
  width: 2rem;
  display: flex;
  text-align: center;
}

.num_right span {
  width: 0.5rem;
  height: 0.5rem;
  background: #999999;
  line-height: 0.5rem;
}

.num_right input {
  border: 1px solid #999999;
  flex: 1;
  width: 1rem;
  text-align: center;
  outline: none;
}

.b_foot {
  padding: 0 0.4rem;
  margin-top: 0.1rem;
}

.size_title {
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.15rem 0;
  font-size: 0.3rem;
}

.size {
  width: 100%;
  height: 0.5rem;
  margin-bottom: 0.3rem;
}

.size span {
  display: inline-block;
  padding: 0.07rem 0.4rem;
  background: $bgcolor2;
  font-size: 0.25rem;
  border-radius: 5px;
  color: $sizecolor2;
  text-align: center;
  margin-right: 0.2rem;
}

.size .spanselect {
  background: $bgcolor1;
  color: $bgcolor;
}

.surebtn {
  width: 90%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: $bgcolor1;
  margin: 0.1rem auto 0.3rem;
  color: $bgcolor;
  border-radius: 0.25rem;
  font-size 0.3rem
}
</style>
