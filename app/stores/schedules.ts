import { defineStore } from "pinia"
import data from "../../public/mock/mock-schedules.json"

export const useSchedulesStore = defineStore("schedules", {
  state: () => ({
    data,
  }),

  getters: {
    schedules: (state) => state.data.schedules,
    legend: (state) => state.data.legend,
    today: (state) => state.data.today,
  },
})