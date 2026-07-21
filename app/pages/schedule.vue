<script setup lang="ts">
import { useSchedulesStore } from "~/stores/schedules"

definePageMeta({
  layout: "default",
})

const schedules = useSchedulesStore()
</script>

<template>
  <div>
    <h1 class="page-title">
      Schedule
    </h1>

    <div class="dashboard-grid">
      <AppCard
        v-for="schedule in schedules.schedules"
        :key="schedule.id"
      >
        <h3>{{ schedule.duty_date }}</h3>

        <p>
          {{ schedule.base_name }}
        </p>

        <p>
          {{ schedule.duty_type }}
        </p>

        <p>
          {{ schedule.count_schedules }} Schedule(s)
        </p>

        <p>
          {{ schedule.count_logbooks }} Logbook(s)
        </p>
      </AppCard>
    </div>
  </div>
</template>