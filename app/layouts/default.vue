<script setup lang="ts">
import AppHeader from "~/components/dashboard/AppHeader.vue"
import AppSidebar from "~/components/dashboard/AppSidebar.vue"
import BottomNavigation from "~/components/common/BottomNavigation.vue"
</script>

<template>
  <div class="layout">
    <!-- Desktop Sidebar -->
    <aside class="desktop-sidebar">
      <AppSidebar />
    </aside>

    <!-- Main Content -->
    <div class="layout-content">
      <AppHeader />

      <main class="layout-main">
        <slot />
      </main>

      <!-- Mobile Bottom Navigation -->
      <BottomNavigation class="mobile-bottom-nav" />
    </div>
  </div>
</template>

<style scoped lang="scss">

.layout {
  display: flex;
  min-height: 100vh;
}

.desktop-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 260px;
  height: 100vh;
}

.layout-content {
  flex: 1;
  min-height: 100vh;
  margin-left: 260px;
}

.layout-main {
  padding: 24px;
}

.mobile-bottom-nav {
  display: none;
}

/* Mobile */
@media (max-width: 768px) {
  .desktop-sidebar {
    display: none;
  }

  .layout-content {
    margin-left: 0;   /* ← INI YANG BELUM ADA */
    width: 100%;
  }

  .layout-main {
    padding: 16px;
    padding-bottom: 96px;
  }

  .mobile-bottom-nav {
    display: block;
  }
}
</style>