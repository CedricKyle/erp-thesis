<script setup>
import { onMounted } from 'vue'
import { Upload } from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['update:isOpen'])

onMounted(() => {
  const dialog = document.getElementById('myModal')
  if (props.isOpen) {
    dialog.showModal()
  }

  dialog.addEventListener('close', () => {
    emit('update:isOpen', false)
  })
})
</script>

<template>
  <dialog id="myModal" class="modal">
    <div class="modal-box bg-white shadow-lg">
      <h3 class="text-lg font-bold">Product Details</h3>

      <div class="fieldset-container grid grid-cols-2 gap-4">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Name</legend>
          <input type="text" class="input w-full border-base-100" placeholder="Product Name" />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Price</legend>
          <input type="text" class="input w-full border-base-100" placeholder="Product Price" />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Primary Stock</legend>
          <input type="number" class="input w-full border-base-100" placeholder="Stock Quantity" />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Backup Stock</legend>
          <input type="number" class="input w-full border-base-100" placeholder="Stock Quantity" />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Primary Stock Expiration</legend>
          <input
            type="datetime-local"
            class="input w-full cursor-pointer border-base-100 accent-primary"
            placeholder=""
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Backup Stock Expiration</legend>
          <input
            type="datetime-local"
            class="input w-full cursor-pointer border-base-100 custom-calender-icon"
            placeholder=""
          />
        </fieldset>

        <!--Max Qty-->
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Max Qty</legend>
          <input type="text" class="input w-full border-base-100" placeholder="Maximum Quantity" />
        </fieldset>

        <!--Uplaod Image-->
        <fieldset
          class="fieldset mt-1 p-4 border-dashed border-1 border-base-300 rounded-lg text-center col-span-2 h-20 flex justify-center items-center"
        >
          <legend class="fieldset-legend">Upload Image</legend>
          <label class="cursor-pointer w-full h-full flex items-center justify-center">
            <div class="flex flex-col items-center gap-3">
              <input type="file" class="hidden" />
              <span class="block text-base-300"><Upload /></span>
            </div>
          </label>
        </fieldset>
      </div>

      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <div class="flex gap-5">
            <button class="btn !bg-gray-500 border-none">Close</button>
            <button class="btn w-30 bg-primaryColor border-none">Add</button>
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

input[type='datetime-local']::-webkit-calendar-picker-indicator {
  filter: invert(0%) brightness(0%);
  cursor: pointer;
}
</style>
