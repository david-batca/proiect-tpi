<template>
  <v-dialog width="600" height="600" persistent>
    <template #activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" color="blue-darken-4" class="round-lg"
        >Adauga student</v-btn
      >
    </template>

    <template #default="{ isActive }">
      <v-card color="blue-grey-darken-4">
        <v-toolbar color="blue-grey-darken-3">
          <v-toolbar-title>Adauga student</v-toolbar-title>

          <v-btn
            icon="mdi-close"
            @click="
              () => {
                isActive.value = false;
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
                  @update:model-value="
                    (value) =>
                      changeUniveristyEmal(
                        newStudent.firstName,
                        value,
                        newStudent.birthDate
                      )
                  "
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
                  @update:model-value="
                    (value) =>
                      changeUniveristyEmal(
                        value,
                        newStudent.lastName,
                        newStudent.birthDate
                      )
                  "
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
                  @update:model-value="
                    (value) =>
                      changeUniveristyEmal(
                        newStudent.firstName,
                        newStudent.lastName,
                        value
                      )
                  "
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
                  @update:model-value="
                    (value) => changeAvailableGroups(value, newStudent.series)
                  "
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
                  @update:model-value="
                    (value) => changeAvailableGroups(newStudent.year, value)
                  "
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
                  v-model="newStudent.universityEmail"
                  label="Adresa de email din cadrul facultatii"
                  variant="outlined"
                  density="compact"
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn
            @click="
              () => {
                newStudent = { ...initialStudent };
                isActive.value = false;
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
            @click="
              () => {
                console.log(newStudent);
                // isActive.value = false;
                // newStudent = initialStudent;
              }
            "
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
  const availableGroups = ref([]);

  const { allSeries } = defineProps(["allSeries"]);

  const emit = defineEmits(["addStudent"]);

  const formStore = useFormStore();

  const initialStudent = {
    firstName: null,
    lastName: null,
    birthDate: null,
    year: null,
    series: null,
    group: null,
    email: null,
    phone: null,
    universityEmail: null,
  };

  const newStudent = ref({ ...initialStudent });

  const changeAvailableGroups = (year, seriesId) => {
    newStudent.value.group = null;
    availableGroups.value = [];

    if (!year || !seriesId) return;

    availableGroups.value = allSeries
      .find((series) => series.id === seriesId)
      .groups.filter((group) => group.year === year);
  };

  const changeUniveristyEmal = (firstName, lastName, birthDate) => {
    newStudent.value.universityEmail = null;
    if (!firstName || !lastName || !birthDate) return;

    if (firstName && lastName && birthDate) {
      newStudent.value.universityEmail = `${newStudent.value.firstName
        .toLowerCase()
        .split("-")
        .join(" ")
        .split(" ")
        .join("_")}.${newStudent.value.lastName.toLowerCase()}${String(
        birthDate.getDate()
      ).padStart(2, "0")}${String(birthDate.getMonth() + 1).padStart(
        2,
        "0"
      )}@stud.etti.upb.ro`;
    }
  };

  const addStudentHandler = async () => {
    try {
      const response = await $fetch("/api/students", {
        method: "post",
        body: newStudent.value,
      });

      formStore.newSeries = response.data;

      Series.value = Object(initialSeries);

      emit("addSeries");
    } catch (error) {
      console.log(error.statusMessage);
    }
  };
</script>
