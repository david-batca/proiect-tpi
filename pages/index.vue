<template>
  <h1>TEST</h1>
</template>

<script setup>
  definePageMeta({
    name: "Acasa",
  });

  const response = await useFetch("/api/students");
</script>

<style scoped></style>
