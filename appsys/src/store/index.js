import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    typeData: [],//列表左右传递小数组
    shopDes: [],//详情页传递详情图片数组给子组件，
    buyer: {},//买家口碑,
    shopcararr: [],//购物车数组
}
const mutations = {
    setType(state, arr) {
        state.typeData = arr;
    },
    setArr(state, arr) {
        state.shopDes = arr;
    },
    setbuyer(state, obj) {
        state.buyer = obj
    },
    setshop(state, obj) {
        state.shopcararr.push(obj)
    },
    getshop(state, arr) {
        state.shopcararr = arr;
    },
    del(state, obj) {
        state.shopcararr.map((item, index) => {
            if (item.id == obj.id) {
                state.shopcararr.splice(index, 1)
            }
        })
    }
}
const actions = {
    setType(context, arr) {
        context.commit('setType', arr)
    },
    setArr(context, arr) {
        context.commit('setArr', arr)
    },
    setbuyer(context, obj) {
        context.commit('setbuyer', obj)
    },
    setshop(context, obj) {
        context.commit('setshop', obj)
    },
    getshop(context, obj) {
        context.commit('getshop', obj)
    },
    del(context, obj) {
        context.commit('del', obj)
    },
}
const store = new Vuex.Store({
    state,
    mutations,
    actions
})
export default store;