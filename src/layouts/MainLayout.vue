<template>
  <q-layout view="lHh Lpr lFf" class="tw-bg-grey-100">
    <o-p-navigation-bar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import OPNavigationBar from 'src/widgets/layout/OPNavigationBar.vue';
</script>
