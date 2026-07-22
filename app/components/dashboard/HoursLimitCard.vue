<script setup lang="ts">
import { computed } from "vue"
import { useCrewStore } from "~/stores/crew"

const crew = useCrewStore()

const progress = computed(() =>
(crew.pilot.totalFlightHours / crew.limits.annual) * 100
)

const status = computed(() => {

if(progress.value>=100)
return "Exceeded Annual Limit"

if(progress.value>=90)
return "Approaching Limit"

return "Within Limit"

})

const statusClass = computed(() => {

if(progress.value>=100)
return "danger"

if(progress.value>=90)
return "warning"

return "safe"

})

function formatHours(v:number){

return new Intl.NumberFormat(
"en-US",
{
maximumFractionDigits:1,
}
).format(v)

}
</script>