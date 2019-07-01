<template>
  <div class="praise">
    <div class="praise_nav">
      <span v-for="(item,index) in arr" :key="index">
        <router-link :to="'/detail/'+id+'/praise/evaluate/'+index" activeClass='select'>{{item.name}}</router-link>
      </span>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data() {
    return {
      obj: {},
      id:'',
      arr:[
        {
          name:'全部评价'
        },
         {
          name:'好评'
        },
         {
          name:'差评'
        },
         {
          name:'晒单'
        },
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {
    this.id = this.$route.params.id;
    // this.obj = this.$store.state.buyer;
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.praise_nav {
  height: 0.6rem;
  line-height: 0.6rem;
  display: flex;
  text-align: center;
  border-bottom: 1px solid $bgcolor3;
}

.praise_nav span {
  flex: 1;
}

.praise_nav span a {
  display: block;
  width: 1.3rem;
  margin: 0 auto;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
  background: $bgcolor3;
  border-radius: 0.25rem;
  color: $bgcolor;
  font-size: 0.25rem;
}
.praise_nav span .select{
   background: $bgcolor1;
}
</style>
