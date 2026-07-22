<script setup lang="ts">
import { computed } from "vue"
import { useCrewStore } from "~/stores/crew"
import NotificationBell from "~/components/dashboard/NotificationBell.vue"

const crew = useCrewStore()

const greeting = computed(() => {
  const hour = new Date().getHours()

  if (hour < 12)
    return "Good Morning"

  if (hour < 17)
    return "Good Afternoon"

  return "Good Evening"
})

function formatHours(v: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
  }).format(v)
}

const currentTime = computed(() => {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
})

const fitStatus = "FIT TO FLY   | "

</script>

<template>
  <AppCard class="dashboard-hero">

    <div class="dashboard-top">

      <div>
        <p class="dashboard-greeting">
          ☀ {{ greeting }}
        </p>

        <h1>
          {{ crew.pilot.name }}
        </h1>
      </div>

      <div class="dashboard-user">

        <NotificationBell />

        <div class="dashboard-avatar">
          JD
        </div>

      </div>

    </div>

    <div class="dashboard-hours">

  <span class="dashboard-hours__value">
    {{ formatHours(crew.pilot.totalFlightHours) }}
  </span>

  <span class="dashboard-hours__label">
    Flight Hours
  </span>

</div>

<div class="dashboard-meta">

  <span class="fit-badge">
    <span class="fit-dot"/>
    {{ fitStatus }}
  </span>

  <span class="dashboard-clock">
    UTC+7 • {{ currentTime }}
  </span>

</div>

      


    <div class="dashboard-actions">

      <button class="btn-primary">
        Request Leave
      </button>

      <button class="btn-secondary">
        View Roster
      </button>

    </div>

  </AppCard>
</template>

<style scoped lang="scss">
.dashboard-hero{
  display:flex;
  flex-direction:column;
  gap:28px;

  padding:34px;

  border-radius:22px;

  background:linear-gradient(
    135deg,
    #F8FBFF,
    #EEF6FF
  );

  border:1px solid #D8E8FA;
}

.dashboard-top{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
}

.dashboard-user{
  display:flex;
  align-items:center;
  gap:14px;
}

.dashboard-avatar{

  width:48px;
  height:48px;

  border-radius:50%;

  background:#2563EB;

  color:white;

  display:flex;
  justify-content:center;
  align-items:center;

  font-weight:700;
}

.dashboard-greeting{
  color:#2563EB;
  font-weight:600;
  margin-bottom:8px;
}

.dashboard-hero h1{
  font-size:38px;
  font-weight:800;
  color:#0E2138;
}

.dashboard-hours{

display:flex;
align-items:baseline;
gap:14px;

margin-top:6px;

}

.dashboard-hours__value{
  font-size:46px;
  font-weight:800;
  color:#E63757;
  line-height:1;
}

.dashboard-hours__label{

font-size:16px;

font-weight:600;

color:#64748B;

}

.dashboard-actions{
  display:flex;
  gap:14px;
}

.btn-primary,
.btn-secondary{

  padding:12px 22px;

  border-radius:14px;

  cursor:pointer;

  font-weight:700;

  transition:.25s;
}

.btn-primary{

  background:#E63757;

  color:white;

  border:none;
}

.btn-primary:hover{

  transform:translateY(-2px);

  box-shadow:0 10px 24px rgba(230,55,87,.25);
}

.btn-secondary{

  background:white;

  color:#0E2138;

  border:1px solid #D7DEE7;
}

.btn-secondary:hover{

  background:#F8FAFC;
}

@media(max-width:768px){

  .dashboard-top{
    flex-direction:column;
    gap:18px;
  }

  .dashboard-user{
    width:100%;
    justify-content:space-between;
  }

  .dashboard-actions{
    flex-direction:column;
  }

  .btn-primary,
  .btn-secondary{
    width:100%;
  }

  .dashboard-hours__value{
    font-size:34px;
  }

  .dashboard-meta{

display:flex;

align-items:center;

gap:18px;

margin-top:8px;

}

.fit-badge{

display:inline-flex;

align-items:center;

gap:8px;

padding:8px 14px;

border-radius:999px;

background:#ECFDF5;

color:#15803D;

font-size:13px;

font-weight:700;

}

.fit-dot{

width:8px;

height:8px;

border-radius:50%;

background:#22C55E;

box-shadow:0 0 10px #22C55E;

animation:pulse 1.8s infinite;

}

.dashboard-clock{

color:#64748B;

font-size:14px;

font-weight:600;

}

@keyframes pulse{

0%{
transform:scale(.9);
opacity:.6;
}

70%{
transform:scale(1.3);
opacity:1;
}

100%{
transform:scale(.9);
opacity:.6;
}

}

}
</style>