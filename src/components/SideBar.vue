<script setup>
import HR from '@/views/HR.vue'
import FINANCEMODULE from '@/views/FINANCE-MODULE.vue'
import SALES from '@/views/SALES.vue'
import INVENTORY from '@/views/INVENTORY.vue'
import CRM from '@/views/CRM.vue'
import DashBoard from '@/views/DashBoard.vue'
import {
  LayoutDashboard,
  UserCog,
  Landmark,
  ChartNoAxesColumnIncreasing,
  Archive,
  Mail,
} from 'lucide-vue-next'
import { ref } from 'vue'

const currentTab = ref('DashBoard')

const tabs = {
  DashBoard: { component: DashBoard, icon: LayoutDashboard },
  HR: { component: HR, icon: UserCog },
  FINANCE_MODULE: { component: FINANCEMODULE, icon: Landmark },
  SALES: { component: SALES, icon: ChartNoAxesColumnIncreasing },
  INVENTORY: { component: INVENTORY, icon: Archive },
  CRM: { component: CRM, icon: Mail },
}

const selectedTab = (tab) => {
  currentTab.value = tab
}

const formatTabName = (tabName) => {
  return tabName
    .replace(/_MODULE/g, '')
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
}
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center bg-bgColor">
      <!-- Page content here -->
      <component v-if="currentTab" :is="tabs[currentTab].component"></component>
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> Open drawer </label>
    </div>
    <div class="drawer-side !overflow-visible">
      <ul class="menu text-base-content min-h-full w-20 p-4 bg-primaryColor">
        <img class="w-full" src="../assets/img/countryside-logo.png" alt="" />
        <!-- Sidebar content here -->
        <div class="flex flex-col justify-center items-center gap-5 mt-5">
          <li v-for="(tab, tabName) in tabs" :key="tabName">
            <div class="relative">
              <button
                class="tooltip tooltip-right"
                :data-tip="formatTabName(tabName)"
                @click="selectedTab(tabName)"
                :class="{ active: currentTab === tabName }"
              >
                <component :is="tab.icon" class="w-7 h-7" />
              </button>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.tooltip::before {
  background-color: green !important;
  color: white !important;
}

.tooltip::after {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
