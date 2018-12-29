<template>
  <div class="suggest-box" v-if="visible" :style="styles">
    <div
      class="suggest-box-img"
      v-bind:style="{ 'background-image': 'url(https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=820&q=80)' }"
    ></div>
    <div class="suggest-box-content">
      <div class="suggest-close" @click="visible = !visible"></div>
      <h1>{{ title }}</h1>
      <p>{{ this.contentEllipsis(content) }}</p>
      <a href="#">
        Continue reading
        <span>→</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['position', 'title', 'content'],
  data () {
    return {
      visible: true,
      styles: {}
    }
  },
  watch: {
    position: function () {
      this.positionChecking()
    }
  },
  mounted () {
    this.positionChecking()
  },
  methods: {
    positionChecking: function () {
      if (this.position.includes('top')) {
        // console.log("includes top");
        if (this.position === 'topRight') {
          this.styles = {
            top: '2rem',
            right: '2rem',
            left: 'initial',
            bottom: 'initial'
          }
        } else if (this.position === 'topLeft') {
          this.styles = {
            top: '2rem',
            right: 'initial',
            left: '2rem',
            bottom: 'initial'
          }
        }
      } else if (this.position.includes('bottom')) {
        // console.log("includes bottom");
        if (this.position === 'bottomRight') {
          this.styles = {
            top: 'initial',
            right: '2rem',
            left: 'initial',
            bottom: '2rem'
          }
        } else if (this.position === 'bottomLeft') {
          this.styles = {
            top: 'initial',
            right: 'initial',
            left: '2rem',
            bottom: '2rem'
          }
        }
      }
    },
    contentEllipsis: function (content) {
      if (content.split(' ').length > 20) {
        let newVal = content.split(' ').slice(0, 20)
        return newVal.join(' ') + '...'
      }
    }
  }
}
</script>

<style scoped>
@import url('../assets/styles/VueSuggestBox.css');
</style>
