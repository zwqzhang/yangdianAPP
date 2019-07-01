<template>
  <div class="home">
    <div class="header">
      <div class="input">
        <input type="text" placeholder="Montagne jeunesse">
        <span>
          <img src="../../../static/img/search.png" alt>
        </span>
      </div>
    </div>
    <div class="bannerimg">
      <img src="../../../static/img/3.png" alt="">
    </div>
    <div class="main">
      <div class="con" v-for="(item,index) in arr" :key="index">
        <h2>
          <img :v-lazy="arr2[index].img" :src="arr2[index].img" alt>
          {{item.name}}
        </h2>
        <ul class="list">
          <li
            v-for="subitem in item.list"
            :key="subitem.id"
            @touchstart="start($event)"
            @touchmove="move($event)"
            @touchend="todetail(subitem.id)"
          >
            <img :v-lazy="subitem.thumbnail" :src="subitem.thumbnail" alt>
            <div>
              <span class="left">￥{{subitem.reduct_price}}.00</span>
              <span class="right">￥{{subitem.original_price}}.00</span>
            </div>
            <p>{{subitem.name}}</p>
          </li>
        </ul>
      </div>
      <!-- <li>
            <img src="http://47.106.12.223:8569/static/img/01.png" alt>
            <div>
              <span class="left">￥88.00</span>
              <span class="right">$96.6</span>
            </div>
            <p>美国沐浴露美国沐浴露美国沐浴露</p>
      </li>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import { Lazyload } from "mint-ui";
export default {
  components: {},
  props: [],
  data() {
    return {
      arr: [],
      arr2: [
        {
          img: "../../../static/img/hot.png"
        },
        {
          img: "../../../static/img/baby.png"
        },
        {
          img: "../../../static/img/meizhuang.png"
        },
        {
          img: "../../../static/img/furniture.png"
        },
        {
          img: "../../../static/img/food.png"
        },
        {
          img: "../../../static/img/airplane.png"
        }
      ],
      arr3: [],
      startY: 0,
      endY: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    start(ev) {
      this.startY = ev.touches[0].clientY;
      this.endY = 0;
    },
    move(ev) {
      this.endY = ev.touches[0].clientY;
    },
    todetail(id) {
      if (this.endY == 0) {
        this.$router.push("/detail/" + id);
      }
    }
  },
  mounted() {
    this.$http({
      url: API.home,
      method: "get"
    }).then(d => {
      // console.log(d);
      this.arr = d.data.data;
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

headernav();
.header{
  position fixed;
  left 0;
  top -2px
}
.bannerimg{
  height 3.7rem
  margin-top 1.42rem;
}
.bannerimg img{
  width 100%;
  height 100%
}
.main {
  padding: 3%;
  margin-bottom: 1rem;
}

.con h2 {
  width: 94%;
  margin: 0 auto;
  height: 1rem;
  line-height: 1rem;
  font-size 0.32rem
}

.con h2 img {
  width: 0.3rem;
  height: 0.35rem;
  vertical-align: middle;
  margin-right: 10px;
}

.list {
  width: 100%;
  height: 4.7rem;
  margin-right: -10px;
}

.list li {
  width: 45%;
  float: left;
  height: 4.6rem;
  margin: 0 0.15rem;
  border: 1px solid #eee;
}

.list img {
  width: 100%;
  height: 3.2rem;
}

.list div {
  display: flex;
  padding: 0.2rem 0.25rem;
}

.list div span {
  flex: 1;
}

.left {
  text-align: left;
  color: $sizecolor1;
  font-size: 0.3rem;
}

.right {
  text-align: right;
  color: $sizecolor3;
  font-size: 0.24rem;
  text-decoration: line-through;
}

.list p {
  padding: 0 0.2rem;
  line-height: 0.3rem;
  font-size: 0.25rem;
}
</style>
