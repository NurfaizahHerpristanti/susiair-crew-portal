import { computed } from "vue"
import dayjs from "dayjs"
import { useCrewStore } from "~/stores/crew"

type SummaryPeriod = "1d" | "1w" | "1m" | "1y"

type ChartPeriod = "1w" | "1m" | "3m" | "6m" | "1y"

export function useFlightHours() {
  const crew = useCrewStore()

  const flightHours = computed(() => crew.flightHours)
  const chartBounds = computed(() => crew.chartBounds)

  function calculateRollingTotal(
    endDate: string,
    windowDays: number,
  ) {
    const end = dayjs(endDate)
    const start = end.subtract(windowDays - 1, "day")

    const total = flightHours.value
      .filter((item) => {
        const date = dayjs(item.date)

        return (
          date.isSame(start)
          || date.isSame(end)
          || (
            date.isAfter(start)
            && date.isBefore(end)
          )
        )
      })
      .reduce(
        (sum, item) => sum + item.hours,
        0,
      )

    return Number(total.toFixed(1))
  }

  function getRollingHours(period: Period) {
    // Daily
    if (period === "1d") {
      const total = flightHours.value.at(-1)?.hours ?? 0

      return {
        period,
        total: Number(total.toFixed(1)),
        limit: crew.limits.daily,
        max: crew.limits.daily,
        percentage: Math.min(
          (total / crew.limits.daily) * 100,
          100,
        ),
      }
    }

    const config = chartBounds.value[period]

    const total = flightHours.value
      .slice(-config.windowDays)
      .reduce(
        (sum, item) => sum + item.hours,
        0,
      )

    return {
      period,
      total: Number(total.toFixed(1)),
      limit: config.limit,
      max: config.max,
      percentage: Math.min(
        (total / config.limit) * 100,
        100,
      ),
    }
  }

  function getRollingSeries(
    period: Exclude<Period, "1d">,
  ) {
    const config = chartBounds.value[period]

    const today = dayjs("2026-05-31")

    return Array.from(
      { length: 15 },
      (_, index) => {
        const date = today
          .subtract(7, "day")
          .add(index, "day")

        return {
          date: date.format("YYYY-MM-DD"),

          label: date.format("DD MMM"),

          total: calculateRollingTotal(
            date.format("YYYY-MM-DD"),
            config.windowDays,
          ),
        }
      },
    )
  }

  return {
    getRollingHours,
    getRollingSeries,
  }
}