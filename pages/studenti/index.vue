<template>
  <v-card variant="flat" class="bg-blue-grey-darken-4 mb-8" color="">
    <template #title>
      <h1>Studenti</h1>
    </template>

    <template #append>
      <v-btn color="blue-darken-4" class="round-lg">Adauga student</v-btn>
    </template>
  </v-card>

  <v-card variant="flat" class="bg-blue-grey-darken-3">
    <template #text>
      <v-data-table
        class="bg-blue-grey-darken-3"
        :items="[
          { id: 1, name: 'test 1' },
          { id: 2, name: 'test 2' },
        ]"
      ></v-data-table>
    </template>
  </v-card>
</template>

<script setup>
  const route = useRoute();
</script>

<style></style>
