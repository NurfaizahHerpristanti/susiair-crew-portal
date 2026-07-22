<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()

const pageInfo = {
  "/dashboard": {
    title: "Dashboard",
    subtitle: "Overview of your flight status",
  },
  "/documents": {
    title: "Documents",
    subtitle: "Manage your licenses and certificates",
  },
  "/schedule": {
    title: "Schedule",
    subtitle: "View your upcoming flights and roster",
  },
}

const current = computed(() => {
  return (
    pageInfo[route.path as keyof typeof pageInfo] ?? {
      title: "Crew Portal",
      subtitle: "",
    }
  )
})
</script>

<template>
  <header class="page-header">
    <h1>{{ current.title }}</h1>

    <p>{{ current.subtitle }}</p>
  </header>
</template>

<style scoped lang="scss">
.page-header{
  padding:28px 32px;
  border-bottom:1px solid #E5E7EB;
  background:white;
}

.page-header h1{
  font-size:36px;
  font-weight:800;
  color:#0E2138;
}

.page-header p{
  margin-top:4px;
  color:#64748B;
  font-size:15px;
}
</style>