import { defineStore } from "pinia";

export const useShowMoreStore = defineStore('showMore', {
  state: () => ({
    showMore: false
  }),
  
  actions: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    }
  }
});

export const useShowFilterStore = defineStore('showFilter', {
  state: () => ({
    showFilter: false
  }),
  
  actions: {
    toggleShowFilter() {
      this.showFilter = !this.showFilter;
    }
  }
});
