import { defineStore } from "pinia"
import mockDocuments from "../../public/mock/mock-documents.json"

export const useDocumentsStore = defineStore("documents", {
  state: () => ({
    today: mockDocuments.today,

    thresholds: mockDocuments.thresholds,

    documents: mockDocuments.documents,
  }),
})