<template>
  <div>
    <div
      class="tw-flex tw-justify-between tw-items-start tw-flex-wrap tw-gap-4"
    >
      <div class="tw-flex tw-items-center tw-gap-4">
        <div class="tw-h-14 tw-w-14 tw-rounded-full tw-bg-grey-100"></div>
        <div>
          <p class="tw-text-base tw-font-semibold tw-text-font-300">
            Dipa Inhouse
          </p>
          <p class="tw-text-font-200 tw-mt-1 tw-text-sm">hello@dipahouse.com</p>
        </div>
      </div>

      <div
        class="tw-flex tw-flex-col tw-gap-1 md:tw-items-end tw-text-sm tw-text-font-200"
      >
        <p>Ijen Boulevard Street 101</p>
        <p>Malang City</p>
        <p>East Java, Indonesia</p>
      </div>
    </div>

    <div
      class="tw-h-40 md:tw-h-44 tw-bg-primary-200 tw-rounded-3xl tw-mt-4 md:tw-mt-10 tw-relative tw-overflow-hidden"
    >
      <div
        class="tw-absolute tw-h-[500px] tw-w-[500px] tw-bg-gradient-to-b tw-from-[#5252A9] tw-to-[#504fa74d] -tw-top-[300px] -tw-left-20 tw-rounded-full tw-flex tw-items-center tw-justify-center"
      >
        <div class="tw-h-1/2 tw-w-5/12 tw-bg-primary-200 tw-rounded-full"></div>
      </div>
      <div
        class="tw-absolute tw-h-[500px] tw-w-[500px] tw-bg-[#6465B2] -tw-bottom-[275px] -tw-right-56 tw-rounded-full tw-flex tw-items-center tw-justify-center"
      >
        <div class="tw-h-1/3 tw-w-1/3 tw-bg-primary-200 tw-rounded-full"></div>
      </div>

      <div
        class="tw-relative tw-w-11/12 tw-mx-auto tw-h-full tw-text-white tw-flex tw-flex-col tw-justify-center tw-gap-2 md:tw-gap-3 tw-text-xs md:tw-text-sm"
      >
        <div class="tw-flex tw-justify-between invoice-detail">
          <p class="tw-font-semibold">Invoice Number</p>
          <p class="tw-font-semibold tw-text-right">Billed to</p>
        </div>
        <div class="tw-flex tw-justify-between invoice-detail">
          <p class="tw-font-semibold">INV-2022-10</p>
          <p class="tw-text-right">Zach Grizzly</p>
        </div>
        <div class="tw-flex tw-justify-between invoice-detail">
          <p>Issued Date: <span class="tw-font-semibold">11-Jan-2022</span></p>
          <p class="tw-text-right">Monlight Agency LTD</p>
        </div>
        <div class="tw-flex tw-justify-between invoice-detail">
          <p>Due Date: <span class="tw-font-semibold">18-Jan-2022</span></p>
          <p class="tw-text-right">New York, USA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.invoice-detail {
  p {
    @apply tw-w-1/2;
  }
}
</style>
