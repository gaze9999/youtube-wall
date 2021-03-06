import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const APP_BAR_STATUS = {
  namespaced: true,
  state: {
    appbarStatus: {
      controlbarExpend: false,
      loadingProgress: 0,
    },
    controlbarStatus: {
      chat: false,
      playing: true,
      muted: false,
    }
  },
  mutations: {
    setControlbarStatus(state, payload) {
      state.appbarStatus.controlbarExpend = payload
    },
    setMutedStatus(state, payload) {
      state.controlbarStatus.muted = payload
    },
    setPlayStatus(state, payload) {
      state.controlbarStatus.playing = payload
    },
    setLocalStorage(state) {
      localStorage.appbarStatus = JSON.stringify({
        controlbarExpend: state.appbarStatus.controlbarExpend ? state.appbarStatus.controlbarExpend : false,
      }),
      localStorage.controlbarStatus = JSON.stringify({
        chat: state.controlbarStatus.chat,
        playing: state.controlbarStatus.playing,
        muted: state.controlbarStatus.muted ? state.controlbarStatus.muted : false,
      })
    },
  },
  actions: {
    updateControlbarStatus({ commit }, payload) {
      commit('setControlbarStatus', payload)
      commit('setLocalStorage')
    },
    updateMutedStatus({ commit }, payload) {
      commit('setMutedStatus', payload)
      commit('setLocalStorage')
    },
    updatePlayStatus({ commit }, payload) {
      commit('setPlayStatus', payload)
      commit('setLocalStorage')
    },
    updateAppbarStatus({ commit, state }) {
      if (!localStorage.appbarStatus && !localStorage.controlbarStatus) {
        localStorage.appbarStatus = JSON.stringify({
          controlbarExpend: false
        }),
        localStorage.controlbarStatus = JSON.stringify({
          chat: false,
          playing: true,
          muted: false,
        })
      } else {
        const localAppbarStatus = JSON.parse(localStorage.appbarStatus)
        const localControlbarStatus = JSON.parse(localStorage.controlbarStatus)
        commit('setControlbarStatus', localAppbarStatus.controlbarExpend)
        commit('setMutedStatus', localControlbarStatus.muted)
        commit('setPlayStatus', localControlbarStatus.playing)
      }
      state.appbarStatus.loadingProgress = 0
    },
  },
  getters: {
    controlbarExpend(state) {
      return state.appbarStatus.controlbarExpend
    },
    progress(state) {
      return state.appbarStatus.loadingProgress
    }
  },
}

const MESSANGE_MODULE = {
  namespaced: true,
  state: {
    snackbar: {
      level: Number,
      messange: String,
    },
    snackbars: [{
      level: Number,
      messange: String,
    }],
    messangeCount: 0
  },
  mutations: {
    bindMessange(state, payload) {
      state.snackbar = payload
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
  },
  mutations: {
    addLink(state, payload) {
      state.videoStore.unshift(payload)
      state.linkIndex = state.videoStore[0].index + 1
      state.linkCount = state.videoStore.length
    },
    updateLinks(state) {
      state.videoStore = JSON.parse(localStorage.videoLocalStore)
      state.linkIndex = state.videoStore[0].index + 1
      state.linkCount = state.videoStore.length
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
    appbar: APP_BAR_STATUS,
  }
})