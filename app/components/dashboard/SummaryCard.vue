<script setup lang="ts">
interface Props {
  title: string
  value: string | number
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <div class="rounded-2xl bg-white p-6 shadow-sm border">
    <p class="text-sm text-gray-500">
      {{ title }}
    </p>

    <h2 class="mt-2 text-3xl font-bold text-slate-800">
      {{ value }}
    </h2>

    <p
      v-if="subtitle"
      class="mt-2 text-sm text-gray-500"
    >
      {{ subtitle }}
    </p>
  </div>
</template>