<script setup lang="ts">
import { useCrewStore } from "~/stores/crew"

const crew = useCrewStore()

function formatHours(v:number){

return new Intl.NumberFormat(
"en-US",
{
maximumFractionDigits:1,
}
).format(v)

}
</script>

<template>

<div class="dashboard-grid">

<StatCard
title="Pilot"
:value="crew.pilot.name"
/>

<StatCard
title="Total Flight Hours"
:value="formatHours(crew.pilot.totalFlightHours)"
subtitle="Current accumulated hours"
/>

<StatCard
title="Annual Limit"
:value="formatHours(crew.limits.annual)"
subtitle="Maximum allowed hours"
/>

</div>

</template>

<style scoped lang="scss">
.dashboard-grid{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:20px;
}

@media(max-width:900px){

.dashboard-grid{
grid-template-columns:1fr;
}

}
</style>