import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoStore: [{
      index: Number,
      videoId: String
    }],
    linkCount: 0,
    linkIndex: 0,
    videoWidth: String
  },
  mutations: {
    addLink(state, payload) {
      state.videoStore.unshift(payload)
      state.linkIndex = state.videoStore[0].index + 1
      state.linkCount = state.videoStore.length
    },
    removeLink(state, payload) {
      state.videoStore.forEach(function(storeItem, storeIndex, storeArray) {
        if (storeItem.index === payload.index) { storeArray.splice(storeIndex, 1) }
      })
      if (state.videoStore.length == 0) {
        localStorage.videoLocalStore = []
        state.linkIndex = 0
      } else {
        state.linkIndex = state.videoStore[0].index + 1
      }
      state.linkCount = state.videoStore.length
    },
    removeAllLinks(state){
      state.videoStore.splice(0, state.linkCount)
      state.linkIndex = 0
      state.linkCount = 0
    },
    updateLinks(state, payload) {
      state.videoStore = payload
      state.linkIndex = state.videoStore[0].index + 1
      state.linkCount = state.videoStore.length
    },
    updateWidth(state, payload) {
      state.videoWidth = payload * 0.5625 + 'px'
    }
  },
  actions: {
  },
  modules: {
  }
})
