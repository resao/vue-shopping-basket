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
  },
  render () {
    return this.$scopedSlots.default({
      items: this.items,
      addItem: this.addItem,
      increaseQuantity: this.increaseQuantity,
      decreaseQuantity: this.decreaseQuantity
    })
  }
}
</script>
