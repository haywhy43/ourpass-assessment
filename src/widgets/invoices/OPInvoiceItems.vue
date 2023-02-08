<template>
  <div class="tw-my-5">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-7">
      <div>
        <p class="tw-font-semibold">Item Detail</p>
        <p class="tw-text-[#BDC2CD] tw-text-xs">
          Type Item for <span class="tw-font-semibold">Hours</span> item
        </p>
      </div>

      <button
        class="tw-flex tw-bg-[#F3F4FD] tw-text-primary-100 tw-py-2 tw-px-3 tw-rounded-lg tw-text-xs tw-gap-2 tw-font-semibold tw-items-center"
      >
        <q-icon name="tune" />
        <span>Customize</span>
      </button>
    </div>

    <div
      class="tw-border-y tw-border-[#F3F4FD] tw-py-3 tw-px-2 tw-grid tw-grid-cols-9 tw-gap-4 tw-text-[#BDC2CD] tw-font-semibold"
    >
      <div class="tw-col-span-4">
        <p>Item Name</p>
      </div>
      <div class="tw-col-span-1">
        <p>Hours</p>
      </div>
      <div class="tw-col-span-1">
        <p>Rate/hr</p>
      </div>
      <div class="tw-col-span-1">
        <p>Tax</p>
      </div>
      <div class="tw-col-span-2">
        <p>Line Total</p>
      </div>
    </div>

    <div
      class="tw-px-2 tw-grid tw-grid-cols-9 tw-py-4 tw-items-center tw-gap-4"
    >
      <div class="tw-col-span-4">
        <o-p-text-input value="Payment Project- Monlight Mobile Design" />
      </div>
      <div class="tw-col-span-1">
        <o-p-text-input value="120" />
      </div>
      <div class="tw-col-span-1">
        <o-p-text-input value="120" />
      </div>
      <div class="tw-col-span-1">
        <o-p-text-input value="120" />
      </div>
      <div class="tw-col-span-2">
        <div class="tw-flex tw-gap-4 tw-items-center">
          <div class="tw-w-10/12">
            <o-p-text-input value="120" />
          </div>
          <button
            class="tw-h-6 tw-w-6 tw-bg-primary-100 tw-rounded-full tw-text-white tw-font-semibold tw-flex tw-items-center tw-justify-center"
          >
            <q-icon name="add" size="0.9rem" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import OPTextInput from 'src/components/OPTextInput.vue';
</script>
