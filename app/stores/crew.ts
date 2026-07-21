import { defineStore } from "pinia"
import flightHours from "../../public/mock/mock-flight-hours.json"

export const useCrewStore = defineStore("crew", {
  state: () => ({
    data: flightHours,
  }),

getters: {
  pilot: (state) => state.data.pilot,

  limits: (state) => state.data.limits,

  remainingAnnual: (state) =>
    state.data.limits.annual - state.data.pilot.totalFlightHours,

  flightHours: (state) => state.data.flightHours,

  chartBounds: (state) => state.data.chartBounds,
},
})