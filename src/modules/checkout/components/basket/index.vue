<template>
  <div>
    <slot :items="items" :remove-item="removeItem"/>
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
      'removeItem'
    ])
  }
}
</script>
