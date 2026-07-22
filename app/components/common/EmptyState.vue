<script setup lang="ts">
interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="empty-state">
    <div class="empty-state__icon">
      📄
    </div>

    <h3>
      {{ title }}
    </h3>

    <p>
      {{ description }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.empty-state{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  padding:56px 24px;

  text-align:center;
}

.empty-state__icon{
  font-size:54px;
  margin-bottom:18px;
}

h3{
  font-size:20px;
  font-weight:700;
  color:#0E2138;
  margin-bottom:8px;
}

p{
  color:#64748B;
  max-width:320px;
  line-height:1.6;
}
</style>