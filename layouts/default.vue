<template>
  <div>
    <v-layout>
      <Navbar />

      <Appbar />
      <v-sheet color="blue-darken-1" class="pa-4 pt-0">
        <v-main>
          <v-sheet
            color="blue-grey-darken-3"
            class="pa-4 rounded-xl main-height"
          >
            <slot />
          </v-sheet>
        </v-main>
      </v-sheet>
    </v-layout>
  </div>
</template>

<script setup></script>
