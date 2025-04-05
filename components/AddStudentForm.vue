<template>
  <v-btn color="blue-darken-4" class="round-lg" @click="isActive = true"
    >Adauga student</v-btn
  >

  <v-dialog v-model="isActive" width="350">
    <v-card>
      <v-toolbar>
        <v-toolbar-title>Adauga serviciu</v-toolbar-title>

        <v-btn icon="mdi-close" @click="isActive = false"></v-btn>
      </v-toolbar>

      <v-card-text class="px-4">
        <v-text-field
          v-model="name"
          label="Nume complet"
          variant="outlined"
          color="primary"
          density="compact"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="error"
          text="Inchide"
          variant="flat"
          @click="isActive = false"
        ></v-btn>
        <v-btn
          color="primary"
          text="Adauga"
          variant="flat"
          @click="isActive = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  const isActive = ref(false);
  const name = ref(null);
</script>
