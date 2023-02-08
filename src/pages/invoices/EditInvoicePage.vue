<template>
  <template v-if="!request.loading && !request.error">
    <div>
      <div class="tw-my-7">
        <p class="tw-text-xs tw-font-semibold">
          <span class="tw-text-primary-100">Invoice </span>
          <span class="tw-text-font-200"
            >/ edit invoice
            <span class="tw-font-bold"
              >({{ invoice?.invoiceNumber }})</span
            ></span
          >
        </p>
      </div>

      <o-p-layout-card>
        <o-p-edit-header />

        <o-p-invoice-items />

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

  <template v-else-if="request.loading">
    <div>
      <p>Loading</p>
    </div>
  </template>

  <template v-else-if="request.error">
    <p>{{ request.errorMessage }}</p>
  </template>
</template>

<script setup lang="ts">
import OPLayoutCard from 'src/widgets/layout/OPLayoutCard.vue';
import OPEditHeader from 'src/widgets/invoices/OPEditHeader.vue';
import OPInvoicePayment from 'src/widgets/invoices/OPInvoicePayment.vue';
import OPInvoiceTotal from 'src/widgets/invoices/OPInvoiceTotal.vue';
import OPInvoiceItems from 'src/widgets/invoices/OPInvoiceItems.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const invoice = ref();

const request = ref({
  loading: false,
  error: false,
  errorMessage: '',
});

function setLoading(val: any) {
  request.value.loading = val;
}

function setError(val: any) {
  request.value.error = true;
  request.value.errorMessage = val;
}

onMounted(() => {
  setLoading(true);
  request.value.error = false;
  fetch(`/api/invoices/${route.params.id}`)
    .then((response) => response.json())
    .then((data) => {
      setLoading(false);
      invoice.value = data;
    })
    .catch((e) => {
      setError(e.message);
    })
    .finally(() => {
      setLoading(false);
    });
});
</script>
