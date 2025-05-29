export const useFormStore = defineStore("forms", {
  state: () => ({
    newSeries: null,
    newStudent: null,
  }),
  actions: {
    resetNewSeries() {
      this.newSeries = null;
    },
    resetNewStudent() {
      this.newSeries = null;
    },
  },
});
