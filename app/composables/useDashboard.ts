export const useDashboard = () => {
  const flightHours = () =>
    useFetch("/mock/mock-flight-hours.json")

  const documents = () =>
    useFetch("/mock/mock-documents.json")

  const schedules = () =>
    useFetch("/mock/mock-schedules.json")

  return {
    flightHours,
    documents,
    schedules,
  }
}