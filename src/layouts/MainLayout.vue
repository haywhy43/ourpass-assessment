<template>
  <q-layout view="lHh Lpr lFf" class="tw-bg-grey-100">
    <o-p-navigation-bar />

    <q-page-container class="tw-px-4 md:tw-px-10">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import OPNavigationBar from 'src/widgets/layout/OPNavigationBar.vue';
</script>
