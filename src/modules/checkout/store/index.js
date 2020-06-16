import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_SESSION,
  RETRIEVE_SESSION
} from './types'

export default {
  namespaced: true,
  state: {
    basket: {
      items: [
        {
          id: '123123',
          name: 'My item 1',
          quantity: 4
        },
        {
          id: '12312323',
          name: 'My item 2',
          quantity: 2
        }
      ],
      promo: null
    }
  },
  actions: {
    async [ADD_ITEM] ({ state, commit }) {
      console.log('adding item')
    },
    async [REMOVE_ITEM] ({ state, commit }) {
      console.log('removing item')
    },
    async [UPDATE_SESSION] ({ state }) {
      localStorage.setItem('wi5:checkout', state)
    },
    async [RETRIEVE_SESSION] () {
      localStorage.getItem('wi5:checkout')
    }
  },
  mutations: {
    [ADD_ITEM] (state) {},
    [REMOVE_ITEM] (state) {}
  }
}
