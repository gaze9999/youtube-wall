import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const MESSANGE_MODULE = {
  namespaced: true,
  state: {
    snackbar: [{
      level: Number,
      messange: String,
    }],
    messangeCount: 0
  },
  mutations: {
    bindMessange(state, payload) {
      state.snackbar = []
      state.snackbar.unshift(payload)
      state.messangeCount += 1
    }
  },
  actions: {
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
    chat: false,
    playing: true,
    muted: false,
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