export const useSeriesStore = defineStore("series", {
  state: () => ({
    newSeries: null,
  }),
  actions: {
    resetNewSeries() {
      this.newSeries = null;
    },
  },
});
