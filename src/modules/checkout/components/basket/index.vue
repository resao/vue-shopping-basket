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
  },
  render () {
    return this.$scopedSlots.default({
      items: this.items,
      removeItem: this.removeItem,
      updateItem: this.updateItem
    })
  }
}
</script>
