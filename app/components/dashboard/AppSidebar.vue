<script setup lang="ts">
import {
  LayoutDashboard,
  FileText,
  CalendarDays,
  LogOut,
} from "lucide-vue-next"

const route = useRoute()

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Documents",
    path: "/documents",
    icon: FileText,
  },
  {
    name: "Schedule",
    path: "/schedule",
    icon: CalendarDays,
  },
]
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__brand">
      <h1>Susi Air</h1>
      <p>Crew Portal</p>
    </div>

    <nav class="sidebar__menu">
      <NuxtLink
        v-for="menu in menus"
        :key="menu.path"
        :to="menu.path"
        class="sidebar__item"
        :class="{ 'sidebar__item--active': route.path === menu.path }"
      >
        <component
          :is="menu.icon"
          :size="20"
        />

        <span>{{ menu.name }}</span>
      </NuxtLink>
    </nav>

    <button class="sidebar__logout">
      <LogOut :size="20" />
      Logout
    </button>
  </aside>
</template>