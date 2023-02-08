<template>
  <div>
    <div class="tw-my-7">
      <p class="tw-text-xs tw-font-semibold">
        <span class="tw-text-primary-100">Invoice </span>
        <span class="tw-text-font-200"
          >/ edit invoice <span class="tw-font-bold">(INV-2022-10)</span></span
        >
      </p>
    </div>

    <o-p-layout-card>
      <o-p-edit-header />
    </o-p-layout-card>
  </div>
</template>

<script setup lang="ts">
import OPLayoutCard from 'src/widgets/layout/OPLayoutCard.vue';
import OPEditHeader from 'src/widgets/invoices/OPEditHeader.vue';
</script>
