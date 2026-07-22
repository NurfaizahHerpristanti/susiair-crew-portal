<script setup lang="ts">
import { useAuthStore } from "~/stores/auth"
import { useRoute } from "vue-router"
import {
  LayoutDashboard,
  FileText,
  CalendarDays,
  LogOut,
} from "lucide-vue-next"

const route = useRoute()

const auth = useAuthStore()

    function logout() {
      auth.logout()

      navigateTo("/")
    }

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
    <div>
      <div class="sidebar__brand">
         <div class="sidebar__logo-wrapper">
        <img
          src="/logo2.png.png"
          alt="Susi Air"
          class="sidebar__logo"
        ></div>

        <div>
          <h1>Crew Portal</h1>
        </div>
      </div>

      <div class="sidebar__divider" />

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
    </div>
    <button
  class="sidebar__logout"
  @click="logout"
>
  <LogOut :size="18" />
  Logout
</button>
    
  </aside>
</template>

<style scoped lang="scss">
.sidebar{
  width:260px;
  height:100vh;

  display:flex;
  flex-direction:column;
  justify-content:space-between;

  padding:28px 20px;

  background:#0E2138;

  color:white;
}

.sidebar__brand{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  margin-bottom:28px;
}

.sidebar__logo{
  width:140px;
  height:auto;
  object-fit:contain;
}

.sidebar__brand h1{
  font-size:22px;
  font-weight:700;
  color:white;
}

.sidebar__brand p{
  color:rgba(255,255,255,.65);
  font-size:13px;
}

.sidebar__divider{
  height:1px;
  background:rgba(255,255,255,.08);
  margin-bottom:28px;
}

.sidebar__menu{
  display:flex;
  flex-direction:column;
  gap:8px;
}

.sidebar__item{
  display:flex;
  align-items:center;
  gap:14px;

  padding:13px 16px;

  border-radius:14px;

  color:rgba(255,255,255,.75);

  text-decoration:none;

  transition:.25s;
}

.sidebar__item:hover{
  background:rgba(255,255,255,.08);

  color:white;

  transform:translateX(4px);
}

.sidebar__item--active{
  background:#E63757;

  color:white;

  font-weight:600;

  box-shadow:0 8px 18px rgba(230,55,87,.25);
}

.sidebar__logout{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:8px;

  width:100%;

  padding:13px;

  border:none;

  border-radius:10px;

  cursor:pointer;

  background:rgba(255,255,255,.08);

  color:white;

  transition:.25s;
  margin:0 auto;
}

.sidebar__logout:hover{
  background:#E63757;

  transform:translateY(-2px);
}

.sidebar__logo-wrapper{
  background:white;

  padding:12px 20px;

  border-radius:12px;

  margin-bottom:14px;
}

.sidebar__logo{
  width:140px;
  height:auto;
}
</style>