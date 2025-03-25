<script setup>
import Sidebar from './components/SideBar.vue'
import { useProductStore } from './stores/Products'
import { onMounted } from 'vue'

const productStore = useProductStore()

onMounted(() => {
  productStore.loadFromLocalStorage()
})
</script>

<template>
  <Sidebar />
</template>
