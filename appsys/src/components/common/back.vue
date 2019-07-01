<template>
  <div class="back">
    <div class="img" @touchend="$router.go(-1)">
      <img src="../../../static/img/nav_icon_back.png" alt>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.img {
  width: 100%;
  height: 100%;
}

.img img {
  width: 0.24rem;
  height: 0.4rem;
  vertical-align middle;
}
</style>
