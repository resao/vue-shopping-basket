<template>
  <div class="home">
    <h1>Checkout</h1>
    <Basket v-slot={items,removeItem}>
      <BasketView :items="items" :remove-item="removeItem" />
    </Basket>
  </div>
</template>

<script>
import Basket from '../components/basket/'
import BasketView from '../components/basket/view/'

export default {
  name: 'Checkout',
  components: {
    Basket,
    BasketView
  }
}
</script>
