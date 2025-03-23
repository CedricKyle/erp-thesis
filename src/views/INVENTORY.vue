<script setup>
import { Plus } from 'lucide-vue-next'
import CategoryDropdown from '@/components/Inventory/CategoryDropdown.vue'
import DryGoodsTable from '@/components/Inventory/DryGoodsTable.vue'
import FoodProductsTable from '@/components/Inventory/FoodProductsTable.vue'
import WetGoodsTable from '@/components/Inventory/WetGoodsTable.vue'

import { ref, computed } from 'vue'

const selectedCategory = ref('Food Products')

const updateCategory = (category) => {
  selectedCategory.value = category
}

const activeTable = computed(() => {
  if (selectedCategory.value === 'Dry Goods') return DryGoodsTable
  if (selectedCategory.value === 'Wet Goods') return WetGoodsTable
  return FoodProductsTable
})

// const productId = ref('')
// const productName = ref('')
// const productPrice = ref('')
// const productPriorityStock = ref('')
// const productPriorityExpiryDate = ref('')
// const productSecondaryStock = ref('')
// const productSecondaryExpiryDate = ref('')
// const productMaxQuantity = ref('')
// const productStatus = ref('')
</script>

<template>
  <div class="w-[95%] mx-auto">
    <!-- Action Container -->
    <div class="first-container flex flex-wrap justify-between m-5 w-full mx-auto">
      <div class="search-container w-80 max-w-full">
        <label class="input !outline-none border-1 border-primaryColor bg-white">
          <svg class="h-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="#466114"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div class="flex flex-wrap gap-5">
        <div
          class="category border border-primaryColor bg-white flex justify-center items-center px-5 rounded-sm min-w-[200px] flex-grow"
        >
          <p class="text-black flex items-center justify-center w-full h-full">
            {{ selectedCategory }}
          </p>
          <CategoryDropdown @updateCategory="updateCategory" class="text-black" />
        </div>
        <div
          class="add-new-stock border border-primaryColor bg-white flex justify-center items-center px-5 rounded-sm min-w-0 flex-grow"
        >
          <p class="text-black flex items-center justify-center w-full h-full">
            add new stock <Plus class="ml-5" />
          </p>
        </div>
        <div
          class="prepare-item border border-primaryColor bg-white flex justify-center items-center px-5 rounded-sm min-w-0 flex-grow"
        >
          <p class="text-black flex items-center justify-center w-full h-full">
            prepare item <Plus class="ml-5" />
          </p>
        </div>
      </div>
    </div>

    <!-- Table Section-->
    <component v-if="activeTable" :is="activeTable" />
  </div>
</template>
