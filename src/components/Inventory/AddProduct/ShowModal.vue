<script setup>
import { ref, watch, onMounted } from 'vue'
import { Upload } from 'lucide-vue-next'

//this is pinia global state management
import { useProductStore } from '@/stores/Products'

const productStore = useProductStore()

const newProducts = ref({
  name: '',
  price: '',
  primaryStock: '',
  backupStock: '',
  primaryExpiry: '',
  backupExpiry: '',
  maxQty: '',
  imgs: null,
})

const submitProduct = () => {
  productStore.addProduct({
    ...newProducts.value,
    price: parseFloat(newProducts.value.price) || 0,
    primaryStock: parseInt(newProducts.value.primaryStock) || 0,
    backupStock: parseInt(newProducts.value.backupStock) || 0,
    maxQty: parseInt(newProducts.value.maxQty) || 0,
  })
  console.log(productStore.products)

  newProducts.value = {
    name: '',
    price: '',
    primaryStock: '',
    backupStock: '',
    primaryExpiry: '',
    backupExpiry: '',
    maxQty: '',
    imgs: null,
  }

  // modal.value?.close()
  // emit('update:isOpen', false)
}

const previewImage = ref(null)
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    newProducts.value.imgs = file
    previewImage.value = URL.createObjectURL(file)
  }
}

const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['update:isOpen'])

const modal = ref(null)
const today = ref('')

watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      modal.value?.showModal()
    } else {
      modal.value?.close()
    }
  },
)

onMounted(() => {
  today.value = new Date().toISOString().split('T')[0]
  if (modal.value) {
    modal.value?.showModal()
  }
})
</script>

<template>
  <dialog ref="modal" class="modal" @cancel="emit('update:isOpen', false)">
    <div class="modal-box bg-white shadow-lg">
      <h3 class="text-lg font-bold">Product Details</h3>

      <div class="fieldset-container grid grid-cols-2 gap-4">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Name</legend>
          <input
            v-model="newProducts.name"
            type="text"
            class="input w-full border-base-100"
            placeholder="Product Name"
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Price</legend>
          <input
            v-model="newProducts.price"
            type="text"
            class="input w-full border-base-100"
            placeholder="Product Price"
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Primary Stock</legend>
          <input
            v-model.number="newProducts.primaryStock"
            type="number"
            class="input w-full border-base-100"
            placeholder="Stock Quantity"
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Backup Stock</legend>
          <input
            v-model.number="newProducts.backupStock"
            type="number"
            class="input w-full border-base-100"
            placeholder="Stock Quantity"
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Primary Stock Expiration</legend>
          <input
            v-model="newProducts.primaryExpiry"
            type="date"
            :min="today"
            class="input w-full cursor-pointer border-base-100 accent-primary"
            placeholder=""
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Backup Stock Expiration</legend>
          <input
            v-model="newProducts.backupExpiry"
            type="date"
            :min="today"
            class="input w-full cursor-pointer border-base-100 custom-calender-icon"
            placeholder=""
          />
        </fieldset>

        <!--Max Qty-->
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Max Qty</legend>
          <input
            v-model.number="newProducts.maxQty"
            type="number"
            class="input w-full border-base-100"
            placeholder="Maximum Quantity"
          />
        </fieldset>

        <!--Uplaod Image-->
        <fieldset
          class="fieldset mt-1 p-4 border-dashed border-2 border-base-300 rounded-lg text-center col-span-2 flex flex-col items-center justify-center w-full min-h-[150px]"
        >
          <legend class="fieldset-legend">Upload Image</legend>
          <label class="cursor-pointer w-full h-full flex flex-col items-center justify-center">
            <input type="file" class="hidden" @change="handleImageUpload" accept="image/*" />

            <template v-if="previewImage">
              <!-- Image Preview -->
              <img
                :src="previewImage"
                alt="Selected Product"
                class="w-full max-w-[120px] h-[100px] object-cover rounded-lg shadow-md"
              />
            </template>

            <template v-else>
              <!-- Show Upload Icon Only if No Image -->
              <span class="block text-base-300"><Upload /></span>
            </template>
          </label>
        </fieldset>
      </div>

      <div class="modal-action">
        <form method="dialog" @submit.prevent="submitProduct">
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex gap-5">
            <button @click="emit('update:isOpen', false)" class="btn !bg-gray-500 border-none">
              Close
            </button>
            <button type="submit" class="btn w-30 bg-primaryColor border-none">Add</button>
          </div>
        </form>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
legend,
input,
h3 {
  color: black;
  font-family: var(--font-Poppins);
}

input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(0%) brightness(0%);
  cursor: pointer;
}
</style>
