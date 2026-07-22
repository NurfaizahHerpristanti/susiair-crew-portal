<script setup lang="ts">
import { computed } from "vue"

const progress = 65

const remaining = "1h 18m"

const phase = computed(() => {
  if (progress < 15)
    return "Taxi"

  if (progress < 35)
    return "Climb"

  if (progress < 80)
    return "Cruising"

  if (progress < 95)
    return "Descending"

  return "Arriving"
})
</script>

<template>
  <AppCard>

    <div class="flight-header">

      <div>

        <small>Current Flight</small>

        <h2>PK-SNA</h2>

      </div>

      <span class="flight-phase">
        {{ phase }}
      </span>

    </div>

    <div class="flight-track">

      <span>SUB</span>

      <div class="track">

        <div
          class="track-progress"
          :style="{ width: `${progress}%` }"
        />

        <div
          class="plane"
          :style="{ left: `${progress}%` }"
        >
          ✈
        </div>

      </div>

      <span>DPS</span>

    </div>

    <div class="flight-footer">

      <div>

        <small>Progress</small>

        <strong>{{ progress }}%</strong>

      </div>

      <div>

        <small>Remaining</small>

        <strong>{{ remaining }}</strong>

      </div>

      <div>

        <small>ETA</small>

        <strong>10:05</strong>

      </div>

    </div>

  </AppCard>
</template>

<style scoped lang="scss">
.flight-header{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:28px;

}

.flight-header h2{

font-size:28px;

font-weight:800;

margin-top:4px;

}

.flight-phase{

padding:8px 14px;

background:#ECFDF5;

color:#15803D;

border-radius:999px;

font-size:13px;

font-weight:700;

}

.flight-track{

display:flex;

align-items:center;

gap:18px;

margin-bottom:26px;

}

.track{

position:relative;

flex:1;

height:8px;

background:#E5E7EB;

border-radius:999px;

}

.track-progress{

height:100%;

background:#2563EB;

border-radius:999px;

}

.plane{

position:absolute;

top:-14px;

transform:translateX(-50%);

font-size:24px;

transition:.5s;

}

.flight-footer{

display:grid;

grid-template-columns:repeat(3,1fr);

text-align:center;

}

.flight-footer small{

display:block;

margin-bottom:6px;

color:#64748B;

}

.flight-footer strong{

font-size:18px;

color:#0E2138;

}
</style>