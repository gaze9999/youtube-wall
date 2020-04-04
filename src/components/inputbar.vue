<template>
  <v-row
    id="inputbar"
    align-center
  >
    <v-text-field
      v-model.trim="inputLink"
      placeholder="輸入網址"
      hide-details
    />
    <v-btn class="mx-2" @click="sendLink">送出</v-btn>
  </v-row>
</template>

<script>
export default {
  name: "inputbar",
  props: {
    videoLink: {
      index: Number,
      link:String
      }
  },
  data() {
    return {
      inputLink: "",
      updateLink: {}
    };
  },
  methods: {
    sendLink() {
      if (this.inputLink !== "") {
        this.updateLink = {
          index: this.$store.state.videoStore.length,
          videoId: this.filterLink(this.inputLink)
        };
        this.$store.commit('addLink', this.updateLink)
        localStorage.videoLocalStore = JSON.stringify(this.$store.state.videoStore)
        this.inputLink = ""
      } else {
        this.$toastr.e("link not input");
      }
    },
    filterLink(link) {
      var getLink = ''
          // chatEmbed = `https://www.youtube.com/live_chat?v=${getLink}&embed_domain=gaze9999.github.io`
      link = link.split('/')
      link[0] !== 'https:' ?
        (getLink = link[1]) :
        (getLink = link[3])
      getLink.length > 11 && (
        getLink = getLink.split('watch?v=')[1]
      ) & (
        getLink = getLink.slice(0, 11)
      )
      return getLink
    }
  }
};
</script>

<style scoped lang="sass">
</style>
