import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
  }),
  actions: {
    addProduct(product) {
      try {
        if (!product.name) {
          throw new Error('Product name is required')
        }
        const newProduct = {
          id: Date.now(),
          name: product.name,
          price: Number(product.price) || 0,
          primaryStock: Number(product.primaryStock) || 0,
          backupStock: Number(product.backupStock) || 0,
          primaryExpiry: product.primaryExpiry || null,
          backupExpiry: product.backupExpiry || null,
          maxQty: Number(product.maxQty) || 0,
          imgs: product.imgs || null,
        }

        this.products.push(newProduct)
        this.saveToLocalStorage()
        return true
      } catch (error) {
        console.error('Error adding product: ', error)
      }
    },

    //save to local Storage
    saveToLocalStorage() {
      try {
        localStorage.setItem('products', JSON.stringify(this.products))
      } catch (error) {
        console.error('Error saving to local storage', error)
      }
    },

    //load from local storage bale eto yung tatawagin sa app
    loadFromLocalStorage() {
      try {
        const savedProducts = localStorage.getItem('products')
        if (savedProducts) {
          this.products = JSON.parse(savedProducts)
        }
      } catch (error) {
        console.error('Error loading from local storage', error)
      }
    },
  },
})
