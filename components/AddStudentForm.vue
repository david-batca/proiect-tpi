<template>
  <v-btn @click="isActive = true" color="blue-darken-4" class="round-lg"
    >Adauga student</v-btn
  >

  <v-dialog v-model="isActive" width="600" height="600" persistent>
    <v-card color="blue-grey-darken-4">
      <v-toolbar color="blue-grey-darken-3">
        <v-toolbar-title>Adauga student</v-toolbar-title>

        <v-btn
          icon="mdi-close"
          @click="
            () => {
              isActive = false;
              newStudent = { ...initialStudent };
            }
          "
        ></v-btn>
      </v-toolbar>

      <v-card-text class="px-4">
        <v-container>
          <v-row>
            <v-col cols="6"
              ><v-text-field
                v-model="newStudent.lastName"
                label="Nume"
                variant="outlined"
                density="compact"
                clearable
                hide-details
              ></v-text-field
            ></v-col>

            <v-col cols="6"
              ><v-text-field
                v-model="newStudent.firstName"
                label="Prenume"
                variant="outlined"
                density="compact"
                clearable
                hide-details
              ></v-text-field
            ></v-col>

            <v-col cols="6">
              <VDateInput
                v-model="newStudent.birthDate"
                variant="outlined"
                prepend-icon=""
                placeholder=""
                label="Data nasterii"
                clearable
                hide-details
              ></VDateInput>
            </v-col>

            <v-col cols="6">
              <v-select
                v-model="newStudent.year"
                label="Anul de studiu"
                variant="outlined"
                :items="[1, 2, 3, 4]"
                hide-details
                clearable
              ></v-select>
            </v-col>

            <v-col cols="6"
              ><v-select
                v-model="newStudent.series"
                :items="allSeries"
                item-value="id"
                item-title="name"
                label="Seria"
                variant="outlined"
                hide-details
                clearable
              ></v-select>
            </v-col>

            <v-col cols="6">
              <v-select
                v-model="newStudent.group"
                :items="availableGroups"
                item-value="id"
                item-title="name"
                label="Grupa"
                variant="outlined"
                hide-details
                clearable
              ></v-select>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="newStudent.email"
                label="Adresa de email"
                variant="outlined"
                density="compact"
                clearable
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="6">
              <v-text-field
                v-model="newStudent.phone"
                label="Numar de telefon"
                variant="outlined"
                density="compact"
                clearable
                hide-details
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="universityEmail"
                label="Adresa de email din cadrul facultatii"
                variant="outlined"
                density="compact"
                hide-details
              ></v-text-field>
            </v-col>

            <v-col v-if="errorMessage" cols="12">
              <div class="text-error">{{ errorMessage }}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="
            () => {
              newStudent = { ...initialStudent };
              isActive = false;
            }
          "
          color="error"
          text="Inchide"
          variant="flat"
        ></v-btn>
        <v-btn
          color="primary"
          text="Adauga"
          variant="flat"
          @click="() => addStudentHandler()"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { useSnackbar } from "~/composables/useSnackbar";

  const { allSeries } = defineProps(["allSeries"]);
  const emit = defineEmits(["addStudent"]);

  const isActive = ref(false);

  const initialStudent = {
    firstName: null,
    lastName: null,
    birthDate: null,
    year: null,
    series: null,
    group: null,
    email: null,
    phone: null,
  };

  const newStudent = ref({ ...initialStudent });

  const errorMessage = ref(null);

  const { show } = useSnackbar();

  const availableGroups = computed(() => {
    if (!newStudent.value.year || !newStudent.value.series) return [];

    return allSeries
      .find((series) => series.id === newStudent.value.series)
      .groups.filter((group) => group.year === newStudent.value.year);
  });

  const universityEmail = computed(() => {
    if (
      !newStudent.value.firstName ||
      !newStudent.value.lastName ||
      !newStudent.value.birthDate
    )
      return null;

    return `${newStudent.value.firstName
      .toLowerCase()
      .split("-")
      .join(" ")
      .split(" ")
      .join("_")}.${newStudent.value.lastName.toLowerCase()}${String(
      newStudent.value.birthDate.getDate()
    ).padStart(2, "0")}${String(
      newStudent.value.birthDate.getMonth() + 1
    ).padStart(2, "0")}@stud.etti.upb.ro`;
  });

  const addStudentHandler = async () => {
    try {
      errorMessage.value = null;

      const response = await $fetch("/api/students", {
        method: "post",
        body: {
          ...newStudent.value,
          universityEmail: universityEmail.value,
        },
      });

      isActive.value = false;
      newStudent.value = { ...initialStudent };

      show(response.message, response.status);

      emit("addStudent");
    } catch (error) {
      errorMessage.value = error.statusMessage;
    }
  };
</script>
