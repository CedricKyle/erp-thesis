import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  actions: {
    addProduct(product) {
      this.products.push(product)
    },
  },
})
