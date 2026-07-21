import { computed } from "vue"
import { useCrewStore } from "~/stores/crew"

type Period = "1w" | "1m" | "3m" | "6m" | "1y"

export function useFlightHours() {
  const crew = useCrewStore()

  const flightHours = computed(() => crew.flightHours)
  const chartBounds = computed(() => crew.chartBounds)

  function getRollingHours(period: Period) {
    const config = chartBounds.value[period]

    const total = flightHours.value
      .slice(-config.windowDays)
      .reduce((sum, item) => sum + item.hours, 0)

    return {
      period,
      total: Number(total.toFixed(1)),
      limit: config.limit,
      max: config.max,
      percentage: Math.min((total / config.limit) * 100, 100),
    }
  }

  return {
    getRollingHours,
  }
}