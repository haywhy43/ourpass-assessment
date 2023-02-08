<template>
  <div class="relative">
    <input
      :value="value"
      class="tw-h-[3.2rem] tw-w-full tw-rounded-2xl tw-text-black tw-bg-[#F9FCFE] tw-border tw-border-[#F7F7F7] tw-px-4 tw-font-semibold"
    />
  </div>
</template>

<script setup lang="ts">
interface IOPTextInput {
  value: string;
}

withDefaults(defineProps<IOPTextInput>(), {
  value: '',
});
</script>
