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

const getStatus = (product) => {
  const primaryStock = product.primaryStock
  if (primaryStock > product.maxQty) {
    return 'Overstocked'
  } else if (primaryStock >= product.maxQty * 0.5) {
    return 'Good'
  } else if (primaryStock > 0) {
    return 'Low'
  }
  return 'Out of Stock'
}

const getStatusStyle = (status) => {
  switch (status) {
    case 'Overstocked':
      return 'bg-purple-100 text-purple-600'
    case 'Good':
      return 'bg-[#D4F6FF] text-[#80C4E9]'
    case 'Low':
      return 'bg-yellow-100 text-yellow-600'
    case 'Out of Stock':
      return 'bg-red-100 text-red-600'
    default:
      return ''
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
          <td>₱{{ newProduct.price }}</td>
          <td class="font-bold">{{ newProduct.primaryStock }}</td>
          <td>{{ newProduct.primaryExpiry }}</td>
          <td>{{ newProduct.backupStock }}</td>
          <td>{{ newProduct.backupExpiry }}</td>
          <td>
            <span :class="`px-3 rounded-lg font-bold ${getStatusStyle(getStatus(newProduct))}`">
              {{ getStatus(newProduct) }}
            </span>
          </td>
          <td class="font-bold">{{ newProduct.maxQty }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
