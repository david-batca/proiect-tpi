<template>
  <h1>TEST</h1>

  {{ response }}
</template>

<script setup>
  definePageMeta({
    name: "Acasa",
  });
  // const { data, error, status } = await useFetch("/api/students");
  const response = await useFetch("/api/students");

  onMounted(() => {
    console.log(response.data);
  });
</script>

<style scoped></style>
