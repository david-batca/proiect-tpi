<template>
  <v-sheet
    variant="flat"
    color="blue-grey-darken-3"
    class="d-flex justify-space-between align-center rounded-lg pa-4 mb-8"
  >
    <h1>Serii si grupe</h1>

    <AddSeriesForm />
  </v-sheet>

  <v-sheet variant="flat" color="blue-grey-darken-3" class="rounded-lg pa-4">
  </v-sheet>
</template>

<script setup>
  definePageMeta({
    name: "Serii si grupe",
  });
</script>
