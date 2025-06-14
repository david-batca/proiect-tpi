<template>
  <v-sheet
    variant="flat"
    color="blue-grey-darken-3"
    class="d-flex justify-space-between align-center rounded-lg pa-4 mb-8"
  >
    <h1>Serii si grupe</h1>

    <AddSeriesForm
      v-if="tabValue === 'serii'"
      @addSeries="
        async () => {
          // series.push(formStore.newSeries);
          // formStore.resetNewSeries();
          await seriesRefresh();
          await groupsRefresh();
        }
      "
    />
  </v-sheet>

  <v-tabs v-model="tabValue" class="rounded-lg mb-2">
    <v-tab value="serii">Serii</v-tab>
    <v-tab value="grupe">Grupe</v-tab>
  </v-tabs>

  <v-sheet variant="flat" color="blue-grey-darken-3" class="rounded-lg pa-4">
    <v-tabs-window v-model="tabValue">
      <v-tabs-window-item value="serii">
        <SeriesTable :series="series" />
      </v-tabs-window-item>
      <v-tabs-window-item value="grupe">
        <GroupsTable :groups="groups" />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-sheet>
</template>

<script setup>
  definePageMeta({
    name: "Serii si grupe",
  });

  const tabValue = ref("serii");

  const formStore = useFormStore();

  const { data: series, refresh: seriesRefresh } = await useFetch(
    "/api/series"
  );
  const { data: groups, refresh: groupsRefresh } = await useFetch(
    "/api/groups"
  );
</script>
