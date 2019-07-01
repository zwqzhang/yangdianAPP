<template>
  <div class="evaluate">
    <!-- evaluate{{this.$route.params.index}} -->
    <ul class="eval_ul">
      <li class="eval_li" v-for="(item,index) in arr" :key="index">
        <h2>
          <span class="h2_left">{{item.buyerName}}</span>
          <span class="h2_right">{{item.createTime|timeFilter}}</span>
        </h2>
        <div class="eval_img">
          <img :src="a" alt v-for="(a,b) in item.postImg" :key="b">
        </div>
        <p class="eval_text">{{item.postDescribe}}</p>
        <div class="mang_text">{{item.adminReviews}}</div>
      </li>
      <!-- <li class="eval_li">
        <h2>
          <span class="h2_left">月的静好</span>
          <span class="h2_right">2015-416545</span>
        </h2>
        <div class="eval_img">
          <img src="http://47.106.12.223:8569/static/img/03.png" alt>
        </div>
        <p class="eval_text">发大师傅打法打法</p>
        <div class="mang_text">是水电费地方甘肃甘谷</div>
      </li>-->
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data() {
    return {
      arr: [],
      obj: {}
    };
  },
  watch: {
    $route() {
      if (this.$route.params.index == 0) {
        this.arr = this.obj.all;
      }
      if (this.$route.params.index == 1) {
        this.arr = this.obj.good;
      }
      if (this.$route.params.index == 2) {
        this.arr = this.obj.bad;
      }
      if (this.$route.params.index == 3) {
        this.arr = this.obj.postForm;
      }
      console.log(this.arr);
    }
  },
  computed: {},
  methods: {},
  mounted() {
    this.obj = this.$store.state.buyer;
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.eval_li {
  border-bottom: 1px solid $bgcolor3;
}

.eval_li h2 {
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
  font-size: 0.25rem;
}

.eval_li h2 span {
  flex: 1;
}

.h2_left {
  color: $bgcolor1;
  text-align: left;
}

.h2_right {
  text-align: right;
}

.eval_img img {
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #ddd;
  margin-right: 0.1rem;
}

.eval_text {
  line-height: 0.4rem;
  font-size: 0.22rem;
  color: #aaa;
}

.mang_text {
  line-height: 0.4rem;
  padding: 0 0.1rem;
  font-size: 0.2rem;
  background: #ddd;
  color: #333;
  border-radius: 5px;
  margin-bottom: 0.2rem;
}
</style>
