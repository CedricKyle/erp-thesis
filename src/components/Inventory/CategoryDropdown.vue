<script setup>
import { defineEmits } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const emit = defineEmits(['updateCategory'])

const selectedCategory = (category) => {
  emit('updateCategory', category)
}
</script>

<template>
  <div class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="cursor-pointer"><ChevronDown /></div>
    <ul tabindex="0" class="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
      <li><a @click="selectedCategory('Food Products')">Food Products</a></li>
      <li><a @click="selectedCategory('Dry Goods')">Dry Goods</a></li>
      <li><a @click="selectedCategory('Wet Goods')">Wet Goods</a></li>
    </ul>
  </div>
</template>

<style scoped>
li a {
  font-family: var(--font-Poppins);
}

li a:hover {
  background-color: var(--color-primaryColor);
  color: white;
}
</style>
