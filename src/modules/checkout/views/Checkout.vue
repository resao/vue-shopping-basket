<template>
  <div class="home">
    <h1>Checkout</h1>
    <Basket v-slot={items,removeItem,updateItem}>
      <BasketView :items="items" :remove-item="removeItem" :update-item="updateItem" />
    </Basket>
  </div>
</template>

<script>
import Basket from '@/modules/checkout/components/basket/'
import BasketView from '@/modules/checkout/components/basket/view/'

export default {
  name: 'Checkout',
  components: {
    Basket,
    BasketView
  }
}
</script>
