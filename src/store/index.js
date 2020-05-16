import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const MESSANGE_MODULE = {
  namespaced: true,
  state: {
    snackbar: [{
      level: String,
      messange: String,
    }],
  },
  mutations: {

  },
  actions: {
    bindMessange(state, payload) {
      state.level = 'normal'
      state.messange = payload
    }
  },
  getters: {

  },
}

const LINK_STORE = {
  namespaced: true,
  state: {
    videoStore: [{
      index: Number,
      videoId: String
    }],
    linkCount: 0,
    linkIndex: 0,
  },
  mutations: {
    addLink(state, payload) {
      state.videoStore.unshift(payload)
      state.linkIndex = state.videoStore[0].index + 1
      state.linkCount = state.videoStore.length
    },
    updateLinks(state) {
      state.videoStore = JSON.parse(localStorage.videoLocalStore)
    },
    removeLink(state, payload) {
      state.videoStore.forEach(function(storeItem, storeIndex, storeArray) {
        if (storeItem.index === payload.index) { storeArray.splice(storeIndex, 1) }
      })
      if (state.videoStore.length === 0) {
        localStorage.videoLocalStore = []
        state.linkIndex = 0
      } else {
        state.linkIndex = state.videoStore[0].index + 1
      }
      state.linkCount = state.videoStore.length
    },
    removeAllLinks(state) {
      state.videoStore.splice(0, state.linkCount)
      state.linkIndex = 0
      state.linkCount = 0
    },
  },
  actions: {
    updateLinks({ commit, state }, payload) {
      if (payload) {
        commit('addLink', payload)
        localStorage.videoLocalStore = JSON.stringify(state.videoStore)
      } else {
        if (localStorage.videoLocalStore !== '[]' && localStorage.videoLocalStore) {
          commit('updateLinks')
        } else {
          state.videoStore.splice(0)
          localStorage.videoLocalStore = '[]'
        }
      }
    }
  },
  getters: {

  },
}

export default new Vuex.Store({
  modules: {
    messanges: MESSANGE_MODULE,
    linkStore: LINK_STORE,
  }
})