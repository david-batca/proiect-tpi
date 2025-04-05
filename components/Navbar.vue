<template>
  <v-navigation-drawer
    v-model="show"
    :permanent="mdAndUp"
    :temporary="!mdAndUp"
    color="blue-darken-4"
    floating
    sticky
  >
    <v-list density="compact" nav>
      <v-list-item
        to="/"
        prepend-icon="mdi-view-dashboard"
        title="Acasa"
        value="home"
        rounded="lg"
      ></v-list-item>

      <v-list-item
        to="/studenti"
        prepend-icon="mdi-account"
        title="Studenti"
        value="studenti"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { useDisplay } from "vuetify";

  const { mdAndUp } = useDisplay();
  const show = ref(mdAndUp.value);
</script>

<style></style>
