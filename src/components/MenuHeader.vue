<script setup>
import { ref } from 'vue';
import { MENU_ITEMS } from '@/utils/constants';

const items = ref(MENU_ITEMS);
</script>
<template>
  <Menubar
    :model="items"
    style="
      border: none !important;
      outline: none !important;
      background-color: #1b1f2b !important;
      border-radius: 0;
    "
    id="headerMenu"
  >
    <template #item="{ item, props, hasSubmenu }">
      <router-link v-if="item.path" v-slot="{ href, navigate }" :to="item.path" custom>
        <a
          v-ripple
          :href="href"
          v-bind="props.action"
          @click="navigate"
          style="border: none !important"
          class="animate__animated animate__fadeIn"
        >
          <span :class="`${item.icon} item-menu`" class="item-menu" />
          <span class="ml-2 pl-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a
        v-else
        v-ripple
        :href="item.path"
        :target="item.target"
        v-bind="props.action"
        class="animate__animated animate__fadein"
      >
        <span :class="`${item.icon} item-menu`" />
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
      </a>
    </template>
  </Menubar>
</template>

<style>
.item-menu {
  padding: 0.5rem;
}
.p-menubar.p-menubar-mobile .p-menubar-root-list {
  border: none !important;
  background-color: #1b1f2b !important;
}
a.p-menubar-button {
  border: none !important;
  outline: none !important;
  background-color: #1b1f2b !important;
}

.p-menuitem-content {
  background-color: #1b1f2b !important;
}
.p-menuitem {
  border: none !important;
}
.p-submenu-list {
  border: none !important;
  background-color: #1b1f2b !important;
}
</style>
