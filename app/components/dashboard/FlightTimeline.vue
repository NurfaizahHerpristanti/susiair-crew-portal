<script setup lang="ts">
const timeline = [
  {
    title: "Report Time",
    time: "06:30",
    status: "done",
  },
  {
    title: "Crew Briefing",
    time: "07:00",
    status: "done",
  },
  {
    title: "Boarding",
    time: "07:40",
    status: "current",
  },
  {
    title: "Departure",
    time: "08:30",
    status: "upcoming",
  },
  {
    title: "Arrival",
    time: "11:10",
    status: "upcoming",
  },
]
</script>

<template>
  <AppCard>

    <h2 class="section-title">
      Today's Flight Timeline
    </h2>

    <div
      v-for="item in timeline"
      :key="item.title"
      class="timeline-item"
    >

      <div
        class="timeline-dot"
        :class="item.status"
      />

      <div class="timeline-content">

        <strong>{{ item.title }}</strong>

        <small>{{ item.time }}</small>

      </div>

    </div>

  </AppCard>
</template>

<style scoped lang="scss">
.section-title{
  font-size:20px;
  font-weight:700;
  margin-bottom:24px;
}

.timeline-item{

display:flex;

gap:16px;

padding:14px 0;

position:relative;

}

.timeline-item:not(:last-child)::after{

content:"";

position:absolute;

left:7px;

top:34px;

width:2px;

height:100%;

background:#E5E7EB;

}

.timeline-dot{

width:16px;

height:16px;

border-radius:50%;

margin-top:4px;

flex-shrink:0;

}

.timeline-dot.done{

background:#22C55E;

}

.timeline-dot.current{

background:#2563EB;

box-shadow:0 0 12px rgba(37,99,235,.4);

}

.timeline-dot.upcoming{

background:#CBD5E1;

}

.timeline-content{

display:flex;

flex-direction:column;

gap:4px;

}

.timeline-content strong{

font-size:15px;

color:#0E2138;

}

.timeline-content small{

color:#64748B;

}
</style>