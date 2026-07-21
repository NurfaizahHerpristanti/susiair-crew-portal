<script setup lang="ts">
import { useCrewStore } from "~/stores/crew"
import { useFlightHours } from "~/composables/useFlightHours"

definePageMeta({
  layout: "default",
})

const crew = useCrewStore()

const { getRollingHours } = useFlightHours()

const week = getRollingHours("1w")
const month = getRollingHours("1m")
const year = getRollingHours("1y")
</script>



<template>
  <div class="dashboard">
    <h1 class="page-title">
      Dashboard
    </h1>

    <div class="dashboard-grid">
      <StatCard
        title="Pilot"
        :value="crew.pilot.name"
      />

      <StatCard
        title="Total Flight Hours"
        :value="crew.pilot.totalFlightHours"
        subtitle="Current accumulated hours"
      />

      <StatCard
        title="Annual Limit"
        :value="crew.limits.annual"
        subtitle="Maximum allowed hours"
      />
    </div>
    <div class="dashboard-section">
  <HoursProgressCard
    title="Last 7 Days"
    :total="week.total"
    :limit="week.limit"
    :percentage="week.percentage"
  />

  <HoursProgressCard
    title="Last 30 Days"
    :total="month.total"
    :limit="month.limit"
    :percentage="month.percentage"
  />

  <HoursProgressCard
    title="Last 365 Days"
    :total="year.total"
    :limit="year.limit"
    :percentage="year.percentage"
  />
</div>
    <div class="dashboard-section">
      <AppCard class="hours-card">
        <h2 class="hours-card__title">
          Hours to Limit
        </h2>

        <div class="hours-row">
          <span>Total Flight Hours</span>

          <strong>
            {{ crew.pilot.totalFlightHours }}
          </strong>
        </div>

        <div class="hours-row">
          <span>Annual Limit</span>

          <strong>
            {{ crew.limits.annual }}
          </strong>
        </div>

        <hr class="hours-divider">

        <div class="hours-remaining">
          {{ crew.remainingAnnual }}

          <small>Hours Remaining</small>
        </div>
      </AppCard>
    </div>
  </div>
</template>