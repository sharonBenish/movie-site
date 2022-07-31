import { createStore } from 'vuex'

export default createStore({
  state: {
    key:0,
  },
  getters: {
  },
  mutations: {
    updateKey(state){
      state.key++
    }
  },
  actions: {
  },
  modules: {
  }
})
