<template>
  <v-btn color="blue-darken-4" class="round-lg" @click="isActive = true"
    >Adauga serie</v-btn
  >

  <v-dialog v-model="isActive" width="400" persistent>
    <v-card color="blue-grey-darken-4">
      <v-toolbar color="blue-grey-darken-3">
        <v-toolbar-title>Adauga serie</v-toolbar-title>

        <v-btn
          icon="mdi-close"
          @click="
            () => {
              newSeries = { ...initialSeries };
              isActive = false;
            }
          "
        ></v-btn>
      </v-toolbar>

      <v-card-text class="px-4">
        <v-text-field
          v-model="newSeries.name"
          label="Nume / Litera "
          variant="outlined"
          density="compact"
          clearable
        ></v-text-field>

        <v-number-input
          v-model="newSeries.groupsPerYear[1]"
          controlVariant="stacked"
          label="Numar grupe anul 1"
          :hideInput="false"
          inset
          variant="outlined"
        ></v-number-input>

        <v-number-input
          v-model="newSeries.groupsPerYear[2]"
          controlVariant="stacked"
          label="Numar grupe anul 2"
          :hideInput="false"
          inset
          variant="outlined"
        ></v-number-input>

        <v-number-input
          v-model="newSeries.groupsPerYear[3]"
          controlVariant="stacked"
          label="Numar grupe anul 3"
          :hideInput="false"
          inset
          variant="outlined"
        ></v-number-input>

        <v-number-input
          v-model="newSeries.groupsPerYear[4]"
          controlVariant="stacked"
          label="Numar grupe anul 4"
          :hideInput="false"
          inset
          variant="outlined"
        ></v-number-input>

        <div v-if="errorMessage" class="text-error">{{ errorMessage }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="
            () => {
              newSeries = { ...initialSeries };
              isActive = false;
            }
          "
          color="error"
          text="Inchide"
          variant="flat"
        ></v-btn>
        <v-btn
          @click="() => addSeries()"
          color="primary"
          text="Adauga"
          variant="flat"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  const isActive = ref(false);

  const emit = defineEmits(["addSeries"]);

  const initialSeries = {
    name: null,
    groupsPerYear: {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
    },
  };

  const newSeries = ref(structuredClone(initialSeries));

  const errorMessage = ref(null);

  const { show } = useSnackbar();

  const addSeries = async () => {
    try {
      errorMessage.value = null;

      const response = await $fetch("/api/series", {
        method: "post",
        body: newSeries.value,
      });

      isActive.value = false;
      newSeries.value = structuredClone(initialSeries);

      show(response.message, response.status);

      emit("addSeries");
    } catch (error) {
      errorMessage.value = error.statusMessage;
    }
  };
</script>
