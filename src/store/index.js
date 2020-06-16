import Vue from 'vue'
import Vuex from 'vuex'

import checkout from '@/modules/checkout/store/'
import shop from '@/modules/shop/store/'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    checkout,
    shop
  }
})
