<script setup lang="ts">
interface Props {
  title: string
  value: string | number
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <div class="stat-card">
    <p class="stat-card__title">
      {{ title }}
    </p>

    <h2 class="stat-card__value">
      {{ value }}
    </h2>

    <p
      v-if="subtitle"
      class="stat-card__subtitle"
    >
      {{ subtitle }}
    </p>
  </div>
</template>