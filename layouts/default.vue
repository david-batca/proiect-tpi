<template>
  <v-layout>
    <v-app class="overflow-y-hidden">
      <Navbar />

      <Appbar />

      <v-sheet color="indigo-darken-4" class="pa-4 pt-0 h-screen">
        <v-main>
          <v-sheet
            color="blue-grey-darken-3"
            class="pa-4 rounded-xl main-height"
          >
            <slot />
          </v-sheet>
        </v-main>
      </v-sheet>
    </v-app>
  </v-layout>
</template>

<script setup></script>
