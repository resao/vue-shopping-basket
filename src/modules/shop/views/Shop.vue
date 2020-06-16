<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <Products v-slot={items,addItem,increaseQuantity,decreaseQuantity}>
      <ProductsView :items="items" :add-item="addItem" :increase-quantity="increaseQuantity" :decrease-quantity="decreaseQuantity"/>
    </Products>
    <Basket v-slot={items,removeItem,updateItem}>
      <BasketView :items="items" :remove-item="removeItem" :update-item="updateItem" />
    </Basket>
  </div>
</template>

<script>
import Basket from '@/modules/checkout/components/basket/'
import BasketView from '@/modules/checkout/components/basket/view/'

import Products from '@/modules/shop/components/products/'
import ProductsView from '@/modules/shop/components/products/view/'

export default {
  name: 'Home',
  components: {
    Basket,
    BasketView,
    Products,
    ProductsView
  }
}
</script>
