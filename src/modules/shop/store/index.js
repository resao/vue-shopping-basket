import {
  INC_QUANTITY,
  DEC_QUANTITY,
  SET_QUANTITY
} from './types'

export default {
  namespaced: true,
  state: {
    products: [{
      id: '2323',
      name: 'Trainers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices erat vitae turpis convallis tincidunt in at enim. Suspendisse vel laoreet velit. Nulla consectetur velit libero, ',
      color: 'Pink',
      quantity: 1
    },
    {
      id: '23243',
      name: 'Watch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices erat vitae turpis convallis tincidunt in at enim. Suspendisse vel laoreet velit. Nulla consectetur velit libero, ',
      color: 'Gold',
      quantity: 1
    },
    {
      id: '232343',
      name: 'Jeans',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices erat vitae turpis convallis tincidunt in at enim. Suspendisse vel laoreet velit. Nulla consectetur velit libero, ',
      color: 'Blue',
      quantity: 1
    }]
  },
  actions: {
    async [INC_QUANTITY] ({ commit, dispatch }, id) {
      const update = {
        id,
        increase: true
      }

      commit(SET_QUANTITY, update)
    },
    async [DEC_QUANTITY] ({ commit, dispatch }, id) {
      const update = {
        id,
        increase: false
      }

      commit(SET_QUANTITY, update)
    }
  },
  mutations: {
    [SET_QUANTITY] (state, payload) {
      state.products.map(product => {
        if (product.id === payload.id) {
          payload.increase ? product.quantity++ : product.quantity--
        }

        return product
      })
    }
  }
}
