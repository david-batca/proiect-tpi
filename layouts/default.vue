<template>
  <v-layout>
    <v-app class="overflow-y-hidden">
      <Navbar />

      <Appbar />

      <v-sheet color="blue-darken-4" class="pa-4 pt-0 h-screen">
        <v-main>
          <v-sheet
            color="blue-grey-darken-4"
            class="pa-4 rounded-lg main-height"
          >
            <slot />
          </v-sheet>
        </v-main>
      </v-sheet>
    </v-app>
  </v-layout>
</template>

<script setup></script>
