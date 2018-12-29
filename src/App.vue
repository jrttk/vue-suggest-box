<template>
  <div class="container">
    {{ boxPosition }}
    <Suggest :position="boxPosition" title="Q&A With The Bear" content="I’m a Digital Communication Design student at Silpakorn University International College. I chose to study Interactive route to develop my UI/UX skills and also to continue on learning code. I love to code but I also love to design stuff. I’m currently working as Freelance Front-End Developer and UI/UX Designer. Mostly I work on Front-End Development and UI Design. I did websites and apps development for several company such as Pascal Intertech, Charm Cosmetic, Zasa by Charm, Wallace Solutions and several more clients."/>
    <!-- <header>
      <h1>Vue Suggest Box</h1>
      <p>An article suggestion box component for Vue.js</p>
    </header>
    <p>This is a simple blog suggestion box component for Vue.js built by <a href="https://bearwhocode.me">The Bear 🐻☁️</a></p>
    <code>
      <span>#For NPM</span><br/>
      npm install vue-suggest-box<br/>
      <span>#For Yarn</span><br/>
      yarn add vue-suggest-box
    </code> -->
    <select name="" id="" v-model="boxPosition">
      <option value="bottomRight">Bottom Right</option>
      <option value="bottomLeft">Bottom Left</option>
      <option value="topRight">Top Right</option>
      <option value="topLeft">Top Left</option>
    </select>
  </div>
</template>
<script>
import Suggest from '@/components/VueSuggestBox'

export default {
  components: {
    Suggest
  },
  data () {
    return {
      boxPosition: 'bottomRight'
    }
  }
}
</script>
