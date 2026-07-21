<script setup lang="ts">
interface Props {
  title: string
  total: number
  limit: number
  percentage: number
}

defineProps<Props>()
</script>

<template>
  <AppCard>
    <div class="progress-card">
      <div class="progress-header">
        <h3>{{ title }}</h3>

        <strong>{{ total }} / {{ limit }}</strong>
      </div>

      <div class="progress-track">
        <div
          class="progress-fill"
          :style="{ width: percentage + '%' }"
        />
      </div>

      <p>{{ percentage.toFixed(1) }}%</p>
    </div>
  </AppCard>
</template>