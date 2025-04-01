<template>
  <v-navigation-drawer
    v-if="display"
    v-model="show"
    :permanent="display.mdAndUp?.value"
    color="blue-darken-1"
    floating
  >
    <v-list-item
      to="/"
      rounded="xl"
      prepend-icon="mdi-view-dashboard"
      title="Acasa"
      value="home"
    ></v-list-item>
    <v-list-item
      to="/studenti"
      rounded="xl"
      prepend-icon="mdi-view-dashboard"
      title="Studenti"
      value="home"
    ></v-list-item>
  </v-navigation-drawer>
</template>

<script setup>
  import { ref } from "vue";
  import { useDisplay } from "vuetify";

  const display = useDisplay();
  const show = ref(display?.mdAndUp?.value);
</script>
