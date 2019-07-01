<template>
  <div class="comimg">
    <div class="listimg">
      <img :src="item" v-for="(item,index) in arr" :key="index">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
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
    // console.log(this.$store.state.shopDes);
    this.arr = this.$store.state.shopDes;
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.listimg {
  width: 100%;
}

.listimg img {
  width: 100%;
  min-height: 5.43rem;
}
</style>
