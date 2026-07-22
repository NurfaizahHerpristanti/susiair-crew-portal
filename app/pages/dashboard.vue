<script setup lang="ts">
import { useFlightHours } from "~/composables/useFlightHours"
import FlightTimeline from "~/components/dashboard/FlightTimeline.vue"
import FlightProgress from "~/components/dashboard/FlightProgress.vue"

definePageMeta({
  layout: "default",
  middleware: "auth",
})

const { getRollingHours } = useFlightHours()

const day = getRollingHours("1d")
const week = getRollingHours("1w")
const month = getRollingHours("1m")
const year = getRollingHours("1y")

</script>

<template>
  <div class="dashboard">
    <DashboardHero />

    <UpcomingFlightCard />

    <FlightProgress />

    <FlightTimeline />

    <DashboardSummary />

    <HoursLimitCard />

    <div class="dashboard-grid">
      <HoursProgressCard
        title="Daily"
        :total="day.total"
        :limit="day.limit"
        :percentage="day.percentage"
      />

      <HoursProgressCard
        title="Weekly"
        :total="week.total"
        :limit="week.limit"
        :percentage="week.percentage"
      />

      <HoursProgressCard
        title="Monthly"
        :total="month.total"
        :limit="month.limit"
        :percentage="month.percentage"
      />

      <HoursProgressCard
        title="Annual"
        :total="year.total"
        :limit="year.limit"
        :percentage="year.percentage"
      />
    </div>

    <HoursChart />

    <LatestNews />

    <DocumentsPreview />
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1100px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 700px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

/* Stagger fade animation */
.dashboard > * {
  opacity: 0;
  animation: fadeUp 0.5s ease forwards;
}

.dashboard > *:nth-child(1) {
  animation-delay: 0.05s;
}

.dashboard > *:nth-child(2) {
  animation-delay: 0.1s;
}

.dashboard > *:nth-child(3) {
  animation-delay: 0.15s;
}

.dashboard > *:nth-child(4) {
  animation-delay: 0.2s;
}

.dashboard > *:nth-child(5) {
  animation-delay: 0.25s;
}

.dashboard > *:nth-child(6) {
  animation-delay: 0.3s;
}

.dashboard > *:nth-child(7) {
  animation-delay: 0.35s;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>