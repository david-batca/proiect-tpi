<template>
  <v-data-table
    :items="series"
    :headers="headers"
    style="background-color: transparent"
  >
  </v-data-table>
</template>

<script setup>
  const { series } = defineProps(["series"]);

  const headers = [
    {
      key: "id",
      title: "Id",
    },
    {
      key: "name",
      title: "Nume / Litera",
    },
    {
      key: "groupsYear1",
      title: "Numar grupe anul 1",
    },
    {
      key: "groupsYear2",
      title: "Numar grupe anul 2",
    },
    {
      key: "groupsYear3",
      title: "Numar grupe anul 3",
    },
    {
      key: "groupsYear4",
      title: "Numar grupe anul 4",
    },
  ];
</script>
