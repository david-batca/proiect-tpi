<template>
  <div>
    <h1>TEST</h1>
  </div>
</template>

<script setup>
  definePageMeta({
    name: "Acasa",
  });
  // const { data, error, status } = await useFetch("/api/students");
  const response = await useFetch("/api/students");
</script>

<style scoped></style>
