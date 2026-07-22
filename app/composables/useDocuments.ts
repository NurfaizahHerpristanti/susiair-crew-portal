import { useDocumentsStore } from "~/stores/documents"

export function useDocuments() {
  const store = useDocumentsStore()

  function getDocuments() {
    const today = new Date(store.today)
    const warningDays = store.thresholds.warningDays

    return store.documents.map((doc) => {
      const expiry = new Date(doc.expiryDate)

      const diff =
        Math.ceil(
          (expiry.getTime() - today.getTime()) /
          (1000 * 60 * 60 * 24),
        )

      let status = "Valid"
      let color = "green"

      if (diff <= 0) {
        status = "Expired"
        color = "red"
      }
      else if (diff <= warningDays) {
        status = "Expiring Soon"
        color = "orange"
      }

      return {
        ...doc,
        daysRemaining: diff,
        status,
        color,
      }
    })
  }

  return {
    getDocuments,
  }
}