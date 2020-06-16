<template functional>
  <div class="products">
    <h2>Products</h2>
    <div class="product" v-for="item in props.items" :key="item.id">
      <h3>{{ item.name }}</h3>
      <p class="product__color">{{ item.color }}</p>
      <p>{{ item.description }}</p>
      <div class="quantity__controls">
        <button @click="() => props.decreaseQuantity(item.id)">-</button>
        <span>QUANTITY: {{ item.quantity }}</span>
        <button @click="() => props.increaseQuantity(item.id)">+</button>
      </div>
      <div class="product__controls">
        <button @click="() => props.addItem(item)">ADD TO BASKET</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsView',
  props: {
    items: {
      type: Array,
      required: true
    },
    addItem: {
      type: Function,
      required: true
    },
    increaseQuantity: {
      type: Function,
      required: true
    },
    decreaseQuantity: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss">
.products {
  max-width: 700px;
  margin: 0px auto;

  .product {
    margin: 100px 0;
  }

  .product__color {
    font-weight: bold
  }

  .quantity__controls, .product__controls {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    > * {
      margin: 0 10px;
    }
  }
}
</style>
