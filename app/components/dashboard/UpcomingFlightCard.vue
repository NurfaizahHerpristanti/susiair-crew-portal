<script setup lang="ts">
import { Plane } from "lucide-vue-next"
import { useFlightStore } from "~/stores/flight"

const store = useFlightStore()
</script>

<template>
  <AppCard class="flight-card">
    <div class="flight-card__header">
      <div>
        <p class="flight-card__label">
          Upcoming Flight
        </p>

        <h3>
          {{ store.flight.date }}
        </h3>
      </div>

      <span class="flight-card__time">
        {{ store.flight.time }}
      </span>
    </div>

    <div class="flight-route">
      <div class="flight-airport">
        <h2>{{ store.flight.departure.icao }}</h2>

        <p>{{ store.flight.departure.city }}</p>
      </div>

      <div class="flight-airport flight-airport--right">
        <h2>{{ store.flight.arrival.icao }}</h2>

        <p>{{ store.flight.arrival.city }}</p>
      </div>
    </div>

    <div class="flight-path">
      <div class="flight-line" />

      <Plane
        :size="22"
        class="flight-plane"
      />

      <div class="flight-line" />
    </div>

    <div class="flight-divider" />

    <div class="flight-footer">
      <div>
        <small>Status</small>

        <span class="status-badge">
          <span class="status-dot" />
          Scheduled
        </span>
      </div>

      <div>
        <small>Aircraft</small>

        <strong>C208B</strong>
      </div>

      <div>
        <small>Gate</small>

        <strong>A2</strong>
      </div>
    </div>
  </AppCard>
</template>

<style scoped lang="scss">
.flight-card{
  position:relative;
  overflow:hidden;

  transition:.25s ease;
}

.flight-card:hover{
  transform:translateY(-4px);

  box-shadow:0 12px 28px rgba(14,33,56,.12);
}

.flight-card::before{
  content:"";

  position:absolute;

  inset:0 auto auto 0;

  width:100%;

  height:4px;

  background:#E63757;
}

/* HEADER */

.flight-card__header{
  display:flex;

  justify-content:space-between;

  align-items:flex-start;

  margin-bottom:28px;
}

.flight-card__label{
  color:#6B7280;

  font-size:13px;

  margin-bottom:4px;
}

.flight-card__header h3{
  font-size:22px;

  font-weight:700;

  color:#0E2138;
}

.flight-card__time{
  padding:8px 14px;

  border-radius:999px;

  background:#FDECEF;

  border:1px solid #F8C9D3;

  color:#E63757;

  font-size:13px;

  font-weight:700;
}

/* AIRPORT */

.flight-route{
  display:flex;

  justify-content:space-between;

  margin-bottom:18px;
}

.flight-airport{
  flex:1;
}

.flight-airport--right{
  text-align:right;
}

.flight-airport h2{
  font-size:38px;

  font-weight:800;

  letter-spacing:1px;

  color:#0E2138;

  line-height:1;
}

.flight-airport p{
  margin-top:8px;

  color:#6B7280;

  font-size:14px;
}

/* PLANE */

.flight-path{
  display:flex;

  align-items:center;

  gap:12px;
}

.flight-line{
  flex:1;

  border-top:2px dashed #CBD5E1;
}

.flight-plane{
  color:#E63757;

  transform:rotate(12deg);

  flex-shrink:0;
}

/* DIVIDER */

.flight-divider{
  margin:28px 0;

  border-top:2px dashed #E5E7EB;
}

/* FOOTER */

.flight-footer{
  display:grid;

  grid-template-columns:repeat(3,1fr);

  text-align:center;
}

.flight-footer small{
  display:block;

  margin-bottom:8px;

  color:#6B7280;

  font-size:12px;
}

.flight-footer strong{
  font-size:15px;

  font-weight:700;

  color:#0E2138;
}

/* STATUS */

.status-badge{
  display:inline-flex;

  align-items:center;

  gap:6px;

  padding:6px 12px;

  border-radius:999px;

  background:#EFF6FF;

  color:#2563EB;

  font-size:13px;

  font-weight:700;
}

.status-dot{
  width:8px;

  height:8px;

  border-radius:50%;

  background:#2563EB;
}

/* MOBILE */

@media(max-width:768px){

.flight-card__header{
flex-direction:column;

gap:16px;
}

.flight-card__time{
align-self:flex-start;
}

.flight-airport h2{
font-size:30px;
}

.flight-footer{
gap:12px;
}

}
</style>