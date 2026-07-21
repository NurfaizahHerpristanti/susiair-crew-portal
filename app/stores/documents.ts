import { defineStore } from "pinia"
import data from "../../public/mock/mock-documents.json"

export const useDocumentsStore = defineStore("documents", {
  state: () => ({
    data,
  }),

  getters: {
    documents: (state) => state.data.documents,
    today: (state) => state.data.today,
    warningDays: (state) => state.data.thresholds.warningDays,
  },
})