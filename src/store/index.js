import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    counter: 1000
  },
  mutations: {
    add(state) {
      return state.counter++
    },
    reduce(state) {
      return state.counter--
    }
  }
})
export default store