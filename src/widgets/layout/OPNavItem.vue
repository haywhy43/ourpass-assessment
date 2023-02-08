<template>
  <router-link :to="route" class="tw-h-10 md:tw-h-full">
    <div
      class="tw-flex tw-items-center tw-gap-2 op-item-container"
      :class="{ active: isActive }"
    >
      <span>
        <q-icon :name="iconName" style="color: #95a0b6; font-size: 1.12rem" />
      </span>
      <div>
        <p class="tw-text-xs tw-font-semibold tw-text-[#1B2235]">{{ name }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
interface IOPNavItem {
  iconName: string;
  route: string;
  name: string;
  isActive?: boolean;
}

withDefaults(defineProps<IOPNavItem>(), {
  iconName: '',
  route: '/',
  name: '',
  isActive: false,
});
</script>

<style lang="scss" scoped>
.q-icon,
p {
  @apply tw-duration-300;
}

.op-item-container {
  @apply tw-relative tw-h-full tw-px-1 tw-overflow-hidden;

  &:hover,
  &.active {
    .q-icon,
    p {
      color: theme('colors.primary.100') !important;
    }
  }

  &::before {
    content: '';
    @apply tw-absolute tw-w-full tw-h-0.5 tw-bg-primary-100 tw-bottom-0 -tw-left-full tw-duration-300;
  }

  &.active {
    &::before {
      @apply tw-left-0;
    }
  }
}
</style>
