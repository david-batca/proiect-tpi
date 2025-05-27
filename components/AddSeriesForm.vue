<template>
  <v-btn color="blue-darken-4" class="round-lg" @click="isActive = true"
    >Adauga serie</v-btn
  >

  <v-dialog v-model="isActive" width="400">
    <v-card color="blue-grey-darken-4">
      <v-toolbar color="blue-grey-darken-3">
        <v-toolbar-title>Adauga serie</v-toolbar-title>

        <v-btn icon="mdi-close" @click="isActive = false"></v-btn>
      </v-toolbar>

      <v-card-text class="px-4">
        <v-text-field
          v-model="name"
          label="Nume / Litera "
          variant="outlined"
          density="compact"
          clearable
        ></v-text-field>

        <v-number-input
          v-model="groupsYear1"
          controlVariant="stacked"
          label="Numar grupe anul 1"
          :hideInput="false"
          inset
        ></v-number-input>

        <v-number-input
          v-model="groupsYear2"
          controlVariant="stacked"
          label="Numar grupe anul 2"
          :hideInput="false"
          inset
        ></v-number-input>

        <v-number-input
          v-model="groupsYear3"
          controlVariant="stacked"
          label="Numar grupe anul 3"
          :hideInput="false"
          inset
        ></v-number-input>

        <v-number-input
          v-model="groupsYear4"
          controlVariant="stacked"
          label="Numar grupe anul 4"
          :hideInput="false"
          inset
        ></v-number-input>
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="isActive = false"
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
  const name = ref(null);
  const groupsYear1 = ref(null);
  const groupsYear2 = ref(null);
  const groupsYear3 = ref(null);
  const groupsYear4 = ref(null);

  const addSeries = async () => {
    const seriesForm = new FormData();
    seriesForm.append("name", name.value);
    // console.log("inainte");

    const { data: response } = await $fetch("/api/series", {
      method: "POST",
      body: seriesForm,
    });

    console.log(response);
  };
</script>
