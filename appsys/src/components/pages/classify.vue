<template>
  <div class="classify">
    <div class="header">
      <div class="input">
        <input type="text" placeholder="Montagne jeunesse">
        <span>
          <img src="../../../static/img/search.png" alt>
        </span>
      </div>
    </div>
    <div class="con">
      <v-left class="left"></v-left>
      <v-right class="right"></v-right>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vLeft from "../pages/classifyleft";
import vRight from "../pages/classifyright";
export default {
  components: {
    vLeft,
    vRight
  },
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
   
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.classify {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

headernav();

.header {
  width: 100%;
  height: 1.4rem;
  background: $bgcolor1;
}

.input input {
  backrground: #ffe1b5;
}

.con {
  height: 100%;
  flex: 1;
  display: flex;
}

.left {
  width: 2.23rem;
  height: 100%;
  background: #fafafa;
  color:$sizecolor2;
}

.right {
  flex: 1;
  width 100%;
  height: 100%;
}
</style>
