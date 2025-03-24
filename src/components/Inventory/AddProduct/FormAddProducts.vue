<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { Plus } from 'lucide-vue-next'

const Modal = defineAsyncComponent(() => import('./ShowModal.vue'))

const showModal = ref(false)
const toggleModal = () => (showModal.value = !showModal.value)
</script>

<template>
  <!-- Open the modal using ID.showModal() method -->
  <div class="">
    <button @click="toggleModal"><Plus class="cursor-pointer ml-3 text-black" /></button>
    <Modal v-if="showModal" v-model:isOpen="showModal" />
  </div>
</template>
