import { defineStore } from "pinia"
import mockFlight from "../../public/mock/mock-flight.json"

export const useFlightStore = defineStore("flight", {
  state: () => ({
    flight: mockFlight.flight,
  }),
})