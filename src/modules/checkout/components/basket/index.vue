<template>
  <div>
    <slot :items="items" :remove-item="removeItem" :update-item="updateItem"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Basket',
  computed: {
    ...mapState('checkout', {
      items: state => state.basket.items
    })
  },
  methods: {
    ...mapActions('checkout', [
      'removeItem',
      'updateItem'
    ])
  }
}
</script>
