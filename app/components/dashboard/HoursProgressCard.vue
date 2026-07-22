<script setup lang="ts">
import { useFlightHours } from "~/composables/useFlightHours"

const { getRollingHours } = useFlightHours()

const day = getRollingHours("1d")
const week = getRollingHours("1w")
const month = getRollingHours("1m")
const year = getRollingHours("1y")
interface Props {
  title: string
  total: number
  limit: number
  percentage: number
}

const props = defineProps<Props>()

function getColor() {
  if (props.percentage >= 100)
    return "#E63757"

  if (props.percentage >= 90)
    return "#F59E0B"

  return "#1FBF8F"
}
</script>

<template>
  <AppCard>
    <div class="progress-card">
      <div class="progress-header">
        <h3>{{ title }}</h3>

        <strong>
          {{ total.toFixed(1) }} / {{ limit }}
        </strong>
      </div>

      <div class="progress-track">
        <div
          class="progress-fill"
          :style="{
            width: percentage + '%',
            background: getColor(),
          }"
        />
      </div>

      <p class="progress-text">
        {{ percentage.toFixed(1) }}%
      </p>
    </div>
  </AppCard>
</template>

<style scoped lang="scss">
.progress-card{
  display:flex;
  flex-direction:column;
  gap:14px;
}

.progress-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.progress-header h3{
  font-size:15px;
  color:#6B7280;
}

.progress-header strong{
  font-size:18px;
  color:#0E2138;
}

.progress-track{
  height:8px;

  border-radius:999px;

  background:#E5E7EB;

  overflow:hidden;
}

.progress-fill{
  height:100%;

  border-radius:999px;

  transition:.3s;
}

.progress-text{
  text-align:right;

  font-size:13px;

  color:#6B7280;
}
</style>