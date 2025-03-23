<script setup>
import { Plus, ChevronDown } from 'lucide-vue-next'

// import { ref } from 'vue'

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
          class="category border border-primaryColor bg-white flex justify-center items-center px-5 rounded-sm min-w-0 flex-grow"
        >
          <p class="text-black flex items-center justify-center w-full h-full">
            category <ChevronDown class="ml-5" />
          </p>
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

    <!-- Table Container-->
    <div class="overflow-x-auto w-full mx-auto rounded-box bg-base-100">
      <table class="table-md w-full max-w-full font-Poppins">
        <thead class="bg-primaryColor">
          <tr>
            <th class="w-10">Id</th>
            <th class="w-70">Product Name</th>
            <th class="w-25">Price</th>
            <th class="w-45">Priority Stock</th>
            <th class="w-45">Expiry Date</th>
            <th class="w-45">Secondary Stock</th>
            <th class="w-45">Expiry Date</th>
            <th class="w-25">Status</th>
            <th class="w-25">Max Qty</th>
            <th class="w-45">Action</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <!--Row starts here-->
          <tr class="text-black">
            <td class="font-bold">1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="s">
              <span class="bg-[#D4F6FF] px-3 rounded-lg text-[#80C4E9] font-bold">Good</span>
            </td>
            <td class="font-bold"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
