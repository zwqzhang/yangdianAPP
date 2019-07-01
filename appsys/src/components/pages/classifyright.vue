<template>
  <div class="right">
    <ul v-if="$store.state.typeData.length>0">
      <li
        class="onelist"
        v-for="(item,index) in ($store.state.typeData[num].list)"
        :key="index"
        @touchend="todetail(item.id)"
      >
        <img :src="item.thumbnail" alt>
        <p>{{item.name}}</p>
      </li>
      <!-- <li class="onelist">
        <img src="http://47.106.12.223:8569/static/img/class01.png" alt>
        <p>第三方的</p>
      </li>-->
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      arr: [],
      i: 0,
      obj: {},
      num: 0
    };
  },
  watch: {
    // 监听路由上index的变化；
    $route() {
      this.num = parseInt(this.$route.params.index);
    }
  },
  computed: {},
  methods: {
    todetail(id) {
      this.$router.push("/detail/" + id);
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

ul {
  width: 97%;
  height: 100%;
  padding: 3% 3% 0 0;
  margin-right: 0px;
  overflow: hidden;
}

.onelist {
  float: left;
  width: 2.25rem;
  height: 2.4rem;
  margin-left: 11px;
  margin-bottom: 0.22rem;
  border: 1px solid #1d84a7;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  position: relative;
}

.onelist img {
  margin-top: 0.12rem;
  width: 1.67rem;
  height: 1.76rem;
}

.onelist p {
  width: 100%;
  height: 0.52rem;
  background: #1d84a7;
  color: $bgcolor;
  line-height: 0.52rem;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size 0.3rem
}
</style>
