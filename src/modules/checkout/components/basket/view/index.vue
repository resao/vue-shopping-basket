<template functional>
  <div class="basket">
    <h2 v-if="props.items && props.items.length">Basket</h2>
    <h2 v-else>Basket is empty</h2>
    <div class="basket__item" v-for="item in props.items" :key="item.id">
      <span>{{ item.name }}</span>
      <div class="basket__controls">
        <div class="form-input">
          <input type="number" :value="item.quantity" @input="(e) => props.updateItem({id: item.id, quantity: e.target.value})"/>
        </div>
        <button @click="() => props.removeItem(item.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.basket {
  max-width: 700px;
  margin: 0px auto;

  .basket__item {
    margin: 20px 0;
  }

  .basket__controls {
    display: flex;
    justify-content: center;
  }
}
</style>
