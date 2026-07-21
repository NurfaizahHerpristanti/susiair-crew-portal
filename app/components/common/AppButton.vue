<script setup lang="ts">
interface Props {
  label: string
  type?: "button" | "submit"
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  type: "button",
  disabled: false,
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="btn btn-primary"
  >
    {{ label }}
  </button>
</template>