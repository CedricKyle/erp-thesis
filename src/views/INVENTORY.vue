<script setup>
import DryGoodsTable from '@/components/Inventory/DryGoodsTable.vue'
import FoodProductsTable from '@/components/Inventory/FoodProductsTable.vue'
import WetGoodsTable from '@/components/Inventory/WetGoodsTable.vue'
import InventoryActions from '@/components/Inventory/InventoryActions.vue'

import { ref, computed } from 'vue'

//this is props wherein data passed to inventoryActions
const selectedCategory = ref('Food Products')

//this is a function that updates selectedCategory when clicked in InventoryActions
const updateCategory = (category) => {
  selectedCategory.value = category
}

const activeTable = computed(() => {
  if (selectedCategory.value === 'Dry Goods') return DryGoodsTable
  if (selectedCategory.value === 'Wet Goods') return WetGoodsTable
  return FoodProductsTable
})
</script>

<template>
  <div class="w-[95%] mx-auto">
    <!-- Action Container -->
    <InventoryActions :selectedCategory="selectedCategory" @updateCategory="updateCategory" />

    <!-- Table Section-->
    <component v-if="activeTable" :is="activeTable" />
  </div>
</template>
