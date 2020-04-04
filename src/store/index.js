import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoStore: [{
      index: Number,
      videoId: String
    }],
    linkCount: 0
  },
  mutations: {
    addLink(state, payload) {
      state.videoStore.unshift(payload)
      state.linkCount += 1
    },
    removeLink(state, payload) {
      state.videoStore.forEach(function(storeItem, storeIndex, storeArray) {
        if (storeItem.index === payload.index) { storeArray.splice(storeIndex, 1) }
      })
      state.linkCount -= 1
    },
    updateLinks(state, payload) {
      state.videoStore = payload
      state.linkCount = state.videoStore.length
    },
  },
  actions: {
  },
  modules: {
  }
})
