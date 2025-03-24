<script setup>
import CategoryDropdown from './CategoryDropdown.vue'
import AddProduct from './AddProduct/FormAddProducts.vue'

defineProps(['selectedCategory'])
const emit = defineEmits(['updateCategory0', 'addProduct'])

const updateCategory = (category) => {
  emit('updateCategory', category)
}

const addProduct = (newProduct) => {
  emit('addProduct', newProduct)
}
</script>

<template>
  <div class="first-container flex flex-wrap justify-between m-5 w-full mx-auto">
    <div class="search-container w-80 max-w-full">
      <label class="input !outline-none border-1 border-primaryColor bg-white">
        <svg class="h-[1.5em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      <!--Category Container-->
      <div
        class="category border border-primaryColor bg-white flex justify-center items-center px-5 rounded-sm min-w-[200px] flex-grow"
      >
        <p class="text-black flex items-center justify-center w-full h-full">
          {{ selectedCategory }}
        </p>
        <CategoryDropdown @updateCategory="updateCategory" class="text-black" />
      </div>

      <!-- Add Product Container-->
      <div
        class="add-new-stock border border-primaryColor bg-white flex justify-center items-center px-5 rounded-sm min-w-0 flex-grow"
      >
        <p class="text-black flex items-center justify-center w-full h-full">Add New Product</p>
        <AddProduct @addProduct="addProduct" />
      </div>

      <!-- Prepare Item Container-->
      <div
        class="prepare-item border border-primaryColor bg-white flex justify-center items-center px-5 rounded-sm min-w-0 flex-grow"
      >
        <p class="text-black flex items-center justify-center w-full h-full">
          Prepare Item
        </p>
      </div>
    </div>
  </div>
</template>
