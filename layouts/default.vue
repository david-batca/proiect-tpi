<template>
  <v-layout>
    <v-app class="overflow-y-hidden" theme="dark">
      <Navbar />

      <Appbar />

      <v-sheet color="blue-darken-4" class="pa-4 pt-0 h-100">
        <v-main class="h-100">
          <v-sheet color="blue-grey-darken-4" class="pa-4 rounded-lg h-100">
            <slot />
          </v-sheet>
        </v-main>
      </v-sheet>

      <SnackBar />
    </v-app>
  </v-layout>
</template>

<script setup></script>
