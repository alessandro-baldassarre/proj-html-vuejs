import Vue from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollanimation'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch, faPhoneFlip} from '@fortawesome/free-solid-svg-icons'
library.add(faPhoneFlip)
library.add(faCircleNotch)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
