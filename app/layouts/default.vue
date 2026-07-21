<script setup lang="ts">
import AppHeader from "~/components/dashboard/AppHeader.vue"
import AppSidebar from "~/components/dashboard/AppSidebar.vue"
</script>

<template>
  <div class="layout">
    <AppSidebar />

    <div class="layout__content">
      <AppHeader />

      <main class="layout__main">
        <slot />
      </main>
    </div>
  </div>
</template>