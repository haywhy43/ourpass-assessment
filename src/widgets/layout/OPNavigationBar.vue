<template>
  <div class="md:tw-h-14 tw-w-full">
    <div
      class="tw-mx-auto md:tw-flex tw-items-center tw-justify-start tw-gap-14 tw-fixed tw-w-full tw-h-14 tw-bg-white tw-z-50 md:tw-px-10"
    >
      <div
        class="md:tw-w-auto tw-flex tw-w-full tw-justify-between tw-items-center tw-h-14 md:tw-px-0 tw-px-4"
      >
        <p class="tw-font-bold tw-text-primary-100 tw-text-lg">Paypay.</p>

        <button class="md:tw-hidden" @click="toggleNav">
          <template v-if="isNavOpen">
            <q-icon name="close" size="1.5rem" />
          </template>
          <template v-else>
            <q-icon name="menu" size="1.5rem" />
          </template>
        </button>
      </div>

      <nav
        class="tw-gap-3 md:tw-gap-8 md:tw-h-full"
        :class="
          isNavOpen
            ? 'tw-flex md:tw-flex-row tw-flex-col tw-bg-white md:tw-pb-0 tw-pb-3 tw-px-4 md:tw-px-0'
            : 'md:tw-flex tw-hidden tw-items-center'
        "
      >
        <o-p-nav-item
          v-for="navItem in navLinks"
          :key="navItem.name"
          :is-active="getIsActive(navItem.route)"
          v-bind="navItem"
        />
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import OPNavItem from './OPNavItem.vue';
import { INavLinks } from 'src/types/widgets';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const isNavOpen = ref(false);

function toggleNav() {
  isNavOpen.value = !isNavOpen.value;
}

const route = useRoute();

function getIsActive(path: string) {
  if (path !== '/') {
    return route.fullPath.includes(path);
  } else {
    return route.fullPath === path;
  }
}

watch(route, () => {
  setTimeout(() => {
    isNavOpen.value = false;
  }, 300);
});

const navLinks: INavLinks[] = [
  {
    name: 'Dashboard',
    iconName: 'space_dashboard',
    route: '/',
  },
  {
    name: 'Invoices',
    iconName: 'description',
    route: '/invoices',
  },
  {
    name: 'Wallet',
    iconName: 'account_balance_wallet',
    route: '/wallet',
  },
  {
    name: 'Activity',
    iconName: 'bar_chart',
    route: '/activity',
  },
  {
    name: 'Help',
    iconName: 'call',
    route: '/help',
  },
];
</script>

<style lang="scss" scoped></style>
