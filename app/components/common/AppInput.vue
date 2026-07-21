<script setup lang="ts">
interface Props {
  modelValue: string
  label: string
  placeholder?: string
  type?: string
}

withDefaults(defineProps<Props>(), {
  placeholder: "",
  type: "text",
})

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void
}>()
</script>

<template>
  <div class="input-group">
    <label class="input-label">
      {{ label }}
    </label>

    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="input"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>