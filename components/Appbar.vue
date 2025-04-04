<template>
  <v-app-bar
    app
    flat
    :order="-1"
    color="indigo-darken-4"
    class="position-fixed"
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <div class="ml-8 bg-white pa-3 h-75 rounded-lg">
      <img
        src="https://etti.upb.ro/wp-content/uploads/2023/09/ETTI-LOGO-A-1.webp"
        class="h-100"
      />
    </div>

    <div style="width: 136px" class="d-none d-md-block"></div>

    <div class="d-flex align-center justify-start">
      <v-btn
        v-if="route.name !== 'Acasa'"
        icon="mdi-arrow-left"
        variant="text"
        @click="() => router.back()"
      />
      <!-- <h1 class="text-h6 d-none d-md-block font-weight-bold">
          {{ route.meta?.title }}
        </h1>
        <h1 class="text-subtitle-1 d-md-none d-block font-weight-bold">
          {{ route.meta?.title }}
        </h1> -->
    </div>
  </v-app-bar>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter, useRoute } from "vue-router";

  const router = useRouter();
  const route = useRoute();

  // console.log("router", router);
  // console.log("route", route);
</script>

<style>
  /* .sticky-app-bar {
    position: sticky !important;
  } */
</style>
