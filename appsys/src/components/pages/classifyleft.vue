<template>
  <div class="left">
    <div v-for="(item,index) in arr" :key="index">
      <router-link :to="'/index/classify/classifyright/'+index" activeClass="select">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      arr: []
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    this.$http({
      url: API.classify,
      method: "get"
    }).then(d => {
      this.arr = d.data.data;
      this.$store.dispatch("setType", this.arr);
    });
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

a {
  height: 0.9rem;
  text-align: center;
  display: block;
  line-height: 0.9rem;
  text-align: center;
  width: 98%;
  height: 100%;
  font-size 0.3rem;
}

.select {
  border-left: 2px solid #1d84a7;
  background: $bgcolor;
  color: $bgcolor1;
}
</style>
