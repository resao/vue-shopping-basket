import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  SET_BASKET,
  RETRIEVE_SESSION,
  SET_SESSION
} from './types'

export default {
  namespaced: true,
  state: {
    basket: {
      items: [],
      promo: null
    }
  },
  actions: {
    async [ADD_ITEM] ({ state, commit, dispatch }, payload) {
      if (!payload) throw Error('ADD_ITEM: EXPECTED PAYLOAD')

      // Find out if item is already in basket
      const itemsAlreadyAdded = state.basket.items.filter(item => item.id === payload.id)
      const existingItem = itemsAlreadyAdded.length && itemsAlreadyAdded[0]

      // If item is already in basket, then update the item in basket
      if (existingItem) {
        dispatch(UPDATE_ITEM, {
          id: payload.id,
          quantity: existingItem.quantity + payload.quantity
        })
      } else { // Otherwise add new item to basket
        commit(ADD_ITEM, payload)
        dispatch(SET_SESSION)
      }
    },
    async [REMOVE_ITEM] ({ commit, dispatch }, id) {
      if (!id) throw Error('REMOVE_ITEM: EXPECTED ID')

      commit(REMOVE_ITEM, id)
      dispatch(SET_SESSION)
    },
    async [UPDATE_ITEM] ({ commit, dispatch }, payload) {
      if (!payload || !payload.id || payload.quantity === null || payload.quantity === undefined) throw Error('UPDATE_ITEM: INVALID PAYLOAD')

      // If quantity is a blank field, do nothing
      if (payload.quantity === '') return

      // If quantity is set lower or equal to 0 then remove item from basket
      if (payload.quantity <= 0) {
        dispatch(REMOVE_ITEM, payload.id)
      }

      commit(UPDATE_ITEM, payload)
      dispatch(SET_SESSION)
    },
    // Set state to localStorage session
    async [SET_SESSION] ({ state }) {
      localStorage.setItem('wi5:checkout', JSON.stringify(state))
    },
    // Retrieve session from localStorage and populate in app state
    async [RETRIEVE_SESSION] ({ commit }) {
      const session = localStorage.getItem('wi5:checkout')
      session && commit(SET_BASKET, JSON.parse(session))
    }
  },
  mutations: {
    [ADD_ITEM] (state, item) {
      state.basket.items.push({
        id: item.id,
        name: item.name,
        quantity: item.quantity
      })
    },
    [REMOVE_ITEM] (state, id) {
      state.basket.items = state.basket.items.filter(item => item.id !== id)
    },
    [UPDATE_ITEM] (state, payload) {
      state.basket.items.map(item => {
        if (item.id === payload.id) {
          item.quantity = payload.quantity
        }
      })
    },
    [SET_BASKET] (state, session) {
      state.basket = session.basket
    }
  }
}
