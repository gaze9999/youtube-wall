<template>
  <div id="inputbar">
    <label for="link_input">Link:</label>
    <input type="text" name="link_input" id="link_input" v-model.trim="inputLink"/>
    <a type="button" class="btn btn-info" @click="sendLink">send</a>
    <!-- <p>{{ vLinks }}</p> -->
  </div>
</template>

<script>
export default {
  name: "inputbar",
  props: {
  },
  data() {
    return {
      inputLink: "",
      linkCounts: 0,
      vLinks: []
    };
  },
  methods: {
    sendLink() {
      if (this.inputLink !== "") {
        this.vLinks.unshift({
          index: this.linkCounts,
          link: this.inputLink
        });
        this.linkCounts += 1;
        this.inputLink = "";
        // console.log(this.vLinks)
        this.$emit('updateLinks', this.vLinks)
      } else {
        this.$toastr.e("link not input");
      }
    }
  }
};
</script>

<style scoped lang="sass">
#inputbar
  padding: .5rem 1rem

#link_input
  border: 1px solid #aaa
  border-radius: 4px
  margin: 0 .5rem
</style>
