<template>
  <v-data-table
    class="bg-blue-grey-darken-3"
    :items="students"
    :headers="headers"
  ></v-data-table>
</template>

<script setup>
  const { students } = defineProps(["students"]);

  const headers = [
    {
      key: "id",
      title: "Id",
    },
    {
      key: "lastName",
      title: "Nume",
    },
    {
      key: "firstName",
      title: "Prenume",
    },
    {
      key: "birthDate",
      title: "Data nasterii",
    },
    {
      key: "email",
      title: "Email personal",
    },
    {
      key: "phone",
      title: "Numar de telefon",
    },
    {
      key: "year",
      title: "Anul de studiu",
    },
    {
      key: "universityEmail",
      title: "Adresa de email universitara",
    },
    {
      key: "group.name",
      title: "Grupa din care face parte",
    },
  ];
</script>
