<script setup>
import TableHeader from '../TableHeader.vue'
import { useProductStore } from '@/stores/Products'

const productStore = useProductStore()

const getRowIndex = (index) => index + 1

// Add a function to safely handle image URLs
const getImageUrl = (img) => {
  try {
    if (!img) return null
    if (typeof img === 'string') return img
    if (typeof img === 'object' && 'type' in img) {
      return URL.createObjectURL(img)
    }
    return null
  } catch (error) {
    console.error('Error creating image URL:', error)
    return null
  }
}
</script>

<template>
  <div class="overflow-x-auto w-full mx-auto rounded-box bg-base-100">
    <table class="table-md w-full max-w-full font-Poppins">
      <!--  Table Header starts here-->
      <TableHeader />
      <tbody class="bg-white">
        <!--Row starts here-->
        <tr
          v-for="(newProduct, index) in productStore.products"
          :key="index"
          class="text-black border-b border-gray-300"
        >
          <td class="font-bold">
            <div class="flex justify-start items-center gap-4">
              {{ getRowIndex(index) }}
              <img
                v-if="getImageUrl(newProduct.imgs)"
                :src="getImageUrl(newProduct.imgs)"
                class="w-12 h-12 object-cover"
                @error="(e) => (e.target.src = '/path/to/fallback-image.jpg')"
              />
            </div>
          </td>
          <td>{{ newProduct.name }}</td>
          <td>{{ newProduct.price }}</td>
          <td>{{ newProduct.primaryStock }}</td>
          <td>{{ newProduct.primaryExpiry }}</td>
          <td>{{ newProduct.backupStock }}</td>
          <td>{{ newProduct.backupExpiry }}</td>
          <td>
            <!-- <span class="bg-[#D4F6FF] px-3 rounded-lg text-[#80C4E9] font-bold">Good</span> -->
          </td>
          <td class="font-bold">{{ newProduct.maxQty }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
