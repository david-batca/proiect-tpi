<template>
  <v-snackbar v-model="isActive" :color="color" timeout="5000">
    <template #text>
      <div class="text-black">{{ message }}</div>
    </template>
  </v-snackbar>
</template>

<script setup>
  import { useSnackbar } from "~/composables/useSnackbar";

  const { isActive, color, message } = useSnackbar();
</script>
