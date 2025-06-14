<template>
  <v-sheet
    variant="flat"
    color="blue-grey-darken-3"
    class="d-flex justify-space-between align-center rounded-lg pa-4 mb-8"
  >
    <h1>Studenti</h1>

    <AddStudentForm
      @addStudent="
        async () => {
          await studentsRefresh();
        }
      "
      :allSeries="allSeries"
    />
  </v-sheet>

  <v-sheet variant="flat" color="blue-grey-darken-3" class="rounded-lg pa-4">
    <StudentsTable :students="students" />
  </v-sheet>
</template>

<script setup>
  definePageMeta({
    name: "Studenti",
  });

  const { data: students, refresh: studentsRefresh } = await useFetch(
    "/api/students"
  );
  const { data: allSeries } = await useFetch("/api/series");
</script>

<style></style>
