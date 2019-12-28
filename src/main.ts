import Vue from 'vue'
import VueSuggestBox from './VueSuggestBox.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(VueSuggestBox),
}).$mount('#app')
