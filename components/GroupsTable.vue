<template>
  <v-data-table
    :items="groups"
    :headers="headers"
    style="background-color: transparent"
  ></v-data-table>
</template>

<script setup>
  const { groups } = defineProps(["groups"]);

  const headers = [
    {
      key: "id",
      title: "Id",
    },
    {
      key: "name",
      title: "Nume",
    },
    {
      key: "series.name",
      title: "Seria",
    },
    {
      key: "year",
      title: "An",
    },
    {
      key: "studentsCount",
      title: "Studenti inmatriculati in grupa",
    },
  ];
</script>
