<template>
  <div>
    <slot :items="items" :add-item="addItem" :increase-quantity="increaseQuantity" :decrease-quantity="decreaseQuantity"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Products',
  computed: {
    ...mapState('shop', {
      items: state => state.products
    })
  },
  methods: {
    ...mapActions('shop', [
      'increaseQuantity',
      'decreaseQuantity'
    ]),
    ...mapActions('checkout', [
      'addItem'
    ])
  }
}
</script>
