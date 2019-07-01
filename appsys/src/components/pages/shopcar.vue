<template>
  <div class="shopcar">
    <header class="header">
      <div class="shop_title">购物车</div>
      <v-back class="back"></v-back>
    </header>
    <div class="shopcon">
      <div class="shopimg" v-if="arr.length==0">
        <img src="../../../static/img/shopcar.jpg" alt>
      </div>
      <ul v-if="arr.length>0">
        <!-- <li class="shoplist">
          <h2>
            <img src="../../../static/img/store.png" alt>
            <span>杭州保税区仓</span>
          </h2>
          <div
            class="content"
            @touchstart="start($event)"
            @touchmove="move($event)"
            @touchend="end()"
          >
            <span class="allselect">
              <img src="../../../static/img/radio_hig.png" alt>
            </span>
            <span class="con_img">
              <img src="http://47.106.12.223:8569/static/img/01.png" alt>
            </span>
            <div class="more_msg">
              <p>的是否的范德萨范德萨发的发的顺丰</p>
              <div class="num_bottom">
                <span @touchend.stop="subtract()">-</span>
                <input type="number" v-model="num">
                <span @touchend.stop="add()">+</span>
              </div>
            </div>
            <span class="con_pricebig">￥118</span>
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
              <span class="delthis" v-if="isshow">删除</span>
            </transition>
          </div>
        </li>-->
        <li class="shoplist" v-for="(item,index) in arr" :key="index">
          <h2>
            <img src="../../../static/img/store.png" alt>
            <span>杭州保税区仓</span>
          </h2>
          <div
            class="content"
            @touchstart="start($event)"
            @touchmove="move($event)"
            @touchend="end(index)"
          >
            <span class="allselect" v-if="!item.isshow">
              <label @touchend="change(index)">
                <img src="../../../static/img/radio_hig.png" alt>
                <input type="checkbox" :checked="!item.ischeck" class="dis">
              </label>
            </span>

            <span class="con_img">
              <img :src="item.img" alt>
            </span>
            <div class="more_msg">
              <p>{{item.name}}</p>
              <div class="num_bottom">
                <span @touchend.stop="subtract(index)">-</span>
                <input type="number" v-model="item.num">
                <span @touchend.stop="add(index)">+</span>
              </div>
            </div>
            <span class="con_pricebig">￥{{(item.num*item.reduct_price).toFixed(2)}}</span>
            <transition
              enter-active-class="animated fadeInRight"
              leave-active-class="animated fadeOutRight"
            >
              <span class="delthis" v-if="item.isshow" @touchend="delthis(item,index)">删除</span>
            </transition>
          </div>
        </li>
      </ul>
    </div>
    <div class="carfoot" v-if="arr.length>0">
      <span class="foot_all">
        <label @touchend="allchange()">
          <img src="../../../static/img/radio_hig.png" alt>
          <input type="checkbox" checked class="dis">
        </label>
        <p>全选</p>
      </span>
      <span class="foot_all2">
        <img src="../../../static/img/editor_nor.png" alt>
        <p>编辑</p>
      </span>
      <span class="foot_price">
        <p class="pr_one">
          合计:￥
          <span>{{allnum.toFixed(2)}}</span>
        </p>
        <p>(不含用费)</p>
      </span>
      <span class="foot_go">去结算</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vBack from "../common/back";
import $ from "jquery";
export default {
  components: {
    vBack
  },
  props: [],
  data() {
    return {
      allprice: "",
      num: 1,
      startX: 0,
      endX: 0,
      arr: [],
      isshow: false,
      onOff: true
      // allnum:0
    };
  },
  watch: {},
  computed: {
    allnum() {
      var all = 0;
      this.arr.map(item => {
        if (item.ischeck == true) {
          all += item.num * item.reduct_price;
        }
      });
      return all;
    }
  },
  methods: {
    change(i) {
      // console.log(this.$(".allselect input").val());
      // console.log($(".allselect img").eq(i));

      if (this.arr[i].ischeck == true) {
        $(".allselect img")
          .eq(i)
          .attr("src", "../../../static/img/radio_nor.png");
        this.arr[i].ischeck = false;
        $(".foot_all input").prop("checked", false);
        $(".foot_all img").attr("src", "../../../static/img/radio_nor.png");
      } else {
        $(".allselect img")
          .eq(i)
          .attr("src", "../../../static/img/radio_hig.png");
        $(".foot_all img").attr("src", "../../../static/img/radio_hig.png");
        $(".foot_all input").prop("checked", true);
        this.arr[i].ischeck = true;
      }
    },
    allchange() {
      // console.log($(".allselect input").prop("checked"));

      if (this.onOff == true) {
        this.arr.map(item => {
          item.ischeck = false;
        });
        $(".foot_all input").prop("checked", true);
        $(".allselect input").prop("checked", false);
        $(".allselect img").attr("src", "../../../static/img/radio_nor.png");
        $(".foot_all img").attr("src", "../../../static/img/radio_nor.png");
        this.onOff = false;
      } else if (this.onOff == false) {
        this.arr.map(item => {
          item.ischeck = true;
        });
        $(".foot_all input").prop("checked", false);
        $(".allselect input").prop("checked", true);
        $(".allselect img").attr("src", "../../../static/img/radio_hig.png");
        $(".foot_all img").attr("src", "../../../static/img/radio_hig.png");
        this.onOff = true;
      }
    },
    add(b) {
      this.arr[b].num++;
      this.$store.dispatch("getshop", this.arr);
    },
    subtract(b) {
      this.arr[b].num--;
      if (this.arr[b].num <= 1) {
        this.arr[b].num = 1;
      }
      this.$store.dispatch("getshop", this.arr);
    },
    start(e) {
      this.startX = e.touches[0].clientX;
      this.endX = 0;
    },
    move(e) {
      this.endX = e.touches[0].clientX;
    },
    end(i) {
      if (this.startX - this.endX > 50) {
        this.arr[i].isshow = true;
      } else if (this.endX - this.startX > 50) {
        this.arr[i].isshow = false;
      }
    },
    delthis(obj, i) {
      this.arr.splice(i, 1);
      this.$store.dispatch("del", obj);
    },
    init() {
      // 进行数据处理，如果有重复的商品加入，则会将其合并到一起，
      var arr = this.$store.state.shopcararr;
      // 对数据进行排序
      arr = arr.sort(function(a, b) {
        return a.name - b.name;
      });
      var result = [];
      var end = 0;
      for (var i = 0; i < arr.length; i++) {
        var num = 0;
        for (var j = i; j < arr.length; j++) {
          if (arr[i].name == arr[j].name) {
            num += arr[j].num;
            end = j;
          } else {
            break;
          }
        }
        result.push({
          id: arr[i].id,
          num: num,
          name: arr[i].name,
          img: arr[i].img,
          reduct_price: arr[i].reduct_price,
          isshow: false,
          ischeck: true
        });
        i = end;
      }
      this.arr = result;
    }
  },
  mounted() {
    this.init();
    // console.log(this.arr);
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.shopcar {
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  height: 1.3rem;
  background: $bgcolor1;
  position: fixed;
  left: 0;
  top: 0px;
  z-index: 3;
}

.header .back {
  position: absolute;
  left: 0.2rem;
  bottom: 0.25rem;
}

.header .shop_title {
  width: 100%;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  color: $bgcolor;
  font-size: 0.35rem;
  position: absolute;
  left: 0;
  bottom: 0;
}

.shopcon {
  flex: 1;
  margin-top: 1.3rem;
  background: #fafafa;
  margin-bottom: 1rem;
}

.shopimg {
  width: 3rem;
  height: 3rem;
  margin: 2rem auto 0;
}

.shopimg img {
  width: 100%;
  height: 100%;
}

.shoplist {
  width: 100%;
  height: 3rem;
}

.shoplist h2 {
  padding: 0 0.2rem;
  line-height: 0.9rem;
}

.shoplist h2 img {
  vertical-align: middle;
  width: 0.4rem;
  height: 0.4rem;
}

.shoplist h2 span {
  vertical-align: middle;
}

.content {
  height: 1.6rem;
  display: flex;
  padding-left: 0.3rem;
  overflow: hidden;
}

.allselect {
  width: 0.8rem;
  text-align: center;
  line-height: 1rem;
}

.allselect img {
  width: 0.3rem;
  height: 0.3rem;
}

.con_img {
  width: 1.6rem;
  height: 1.6rem;
  margin: 0 2px;
}

.con_img img {
  width: 1.6rem;
  height: 1.6rem;
}

.more_msg {
  width: 2.7rem;
  padding: 0 0.1rem;
}

.more_msg p {
  font-size: 0.3rem;
  line-height: 0.4rem;
}

.num_bottom {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  margin-top: 0.1rem;
}

.num_bottom span {
  float: left;
  width: 0.5rem;
  height: 0.4rem;
  border: 1px solid #aaa;
}

.num_bottom input {
  float: left;
  width: 1rem;
  height: 0.4rem;
  outline: none;
  border: 1px solid #aaa;
  text-align: center;
}

.con_pricebig {
  width: 1.5rem;
  color: black;
  text-align: center;
  font-size: 0.32rem;
  line-height: 1.6rem;
}

.delthis {
  flex: 1;
  line-height: 1.6rem;
  color: $bgcolor;
  background: $bgcolor1;
  text-align: center;
}

.carfoot {
  position: fixed;
  left: 0;
  bottom: 1rem;
  width: 100%;
  height: 1.2rem;
  display: flex;
}

.foot_all {
  width: 1.3rem;
  height: 1.2rem;
  text-align: center;
}

.foot_all img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.2rem;
}

.foot_all p {
  line-height: 0.6rem;
}

.foot_all2 {
  width: 1.3rem;
  height: 1.2rem;
  text-align: center;
}

.foot_all2 img {
  width: 0.4rem;
  height: 0.4rem;
  margin-top: 0.2rem;
}

.foot_all2 p {
  line-height: 0.6rem;
}

.foot_price {
  flex: 1;
  text-align: center;
  line-height: 0.35rem;
  font-size: 0.25rem;
  color: $sizecolor3;
}

.pr_one {
  margin-top: 0.2rem;
}

.foot_go {
  width: 2rem;
  line-height: 1.2rem;
  text-align: center;
  background: $bgcolor1;
}
.dis{
  display none;
}
</style>
