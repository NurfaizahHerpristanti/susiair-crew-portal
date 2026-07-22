<script setup lang="ts">
import { useRoute } from "vue-router"
import {
  House,
  CalendarDays,
  BookOpen,
  Ellipsis,
} from "lucide-vue-next"

const route = useRoute()
</script>

<template>
  <nav class="bottom-nav">
    <NuxtLink
      to="/dashboard"
      class="bottom-nav__item"
      :class="{ active: route.path === '/dashboard' }"
    >
      <House :size="20" />
      <span>Home</span>
    </NuxtLink>

    <NuxtLink
      to="/schedule"
      class="bottom-nav__item"
      :class="{ active: route.path === '/schedule' }"
    >
      <CalendarDays :size="20" />
      <span>Schedule</span>
    </NuxtLink>

    <button class="bottom-nav__item">
      <BookOpen :size="20" />
      <span>Logbook</span>
    </button>

    <button class="bottom-nav__item">
      <Ellipsis :size="20" />
      <span>More</span>
    </button>
  </nav>
</template>

<style scoped lang="scss">
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  height: 72px;

  background: #ffffff;

  border-top: 1px solid #e5e7eb;

  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: 100;

  box-shadow: 0 -4px 12px rgba(0, 0, 0, .05);
}

.bottom-nav__item {
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 4px;

  color: #64748b;

  text-decoration: none;

  border: none;
  background: transparent;

  cursor: pointer;

  transition: .2s;
}

.bottom-nav__item span {
  font-size: 12px;
}

.bottom-nav__item:hover {
  color: #E63757;
}

.bottom-nav__item.active {
  color: #E63757;
  font-weight: 600;
}

/* Desktop → disembunyikan */
@media (min-width: 769px) {
  .bottom-nav {
    display: none;
  }
}
</style>