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

      <div
        class="tw-mt-4 tw-flex md:tw-flex-row tw-flex-col-reverse tw-gap-10 tw-justify-between tw-w-full"
      >
        <div class="md:tw-w-1/2">
          <o-p-invoice-payment />
        </div>
        <div class="md:tw-w-1/2">
          <o-p-invoice-total />
        </div>
      </div>
    </o-p-layout-card>
  </div>
</template>

<script setup lang="ts">
import OPLayoutCard from 'src/widgets/layout/OPLayoutCard.vue';
import OPEditHeader from 'src/widgets/invoices/OPEditHeader.vue';
import OPInvoicePayment from 'src/widgets/invoices/OPInvoicePayment.vue';
import OPInvoiceTotal from 'src/widgets/invoices/OPInvoiceTotal.vue';
</script>
