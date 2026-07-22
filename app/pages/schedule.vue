<script setup lang="ts">
import { computed, ref } from "vue"
import dayjs from "dayjs"
import { useSchedulesStore } from "~/stores/schedules"

definePageMeta({
  layout: "default",
  middleware: "auth",
})

const schedules = useSchedulesStore()

const today = dayjs(schedules.today)

const currentMonth = ref(dayjs(schedules.today))

const daysInMonth = computed(() =>
  currentMonth.value.daysInMonth(),
)

const firstDay = computed(() =>
  currentMonth.value.startOf("month").day(),
)

const calendarDays = computed(() =>
  Array.from(
    { length: daysInMonth.value },
    (_, i) => i + 1,
  ),
)

function getSchedule(day: number) {
  const date = currentMonth.value
    .date(day)
    .format("YYYY-MM-DD")

  return schedules.schedules.find(
    schedule => schedule.duty_date === date,
  )
}

function isToday(day:number){

return currentMonth.value
.date(day)
.format("YYYY-MM-DD") === schedules.today

}

function getDutyColor(dutyType: string) {
  return (
    schedules.legend.find(
      item => item.code === dutyType,
    )?.color ?? "#CBD5E1"
  )
}

function showDetail() {
  console.log("Detail page coming soon")
}

function previousMonth() {
  currentMonth.value = currentMonth.value.subtract(1, "month")
}

function nextMonth() {
  currentMonth.value = currentMonth.value.add(1, "month")
}
</script>

<template>
  <div>

    <AppCard>
      <!-- Header -->
      <div class="calendar-header">
        <button @click="previousMonth">
          ‹
        </button>

        <h2>
          {{ currentMonth.format("MMMM YYYY") }}
        </h2>

        <button @click="nextMonth">
          ›
        </button>
      </div>

      <!-- Weekdays -->
      <div class="calendar-weekdays">
        <span>Mo</span>
        <span>Tu</span>
        <span>We</span>
        <span>Th</span>
        <span>Fr</span>
        <span>Sa</span>
        <span>Su</span>
      </div>

      <!-- Calendar -->
      <div class="calendar-grid">
        <!-- Empty cells -->
        <div
          v-for="n in firstDay"
          :key="'empty-' + n"
          class="calendar-cell calendar-cell--empty"
        />

        <!-- Days -->
        <div
          v-for="day in calendarDays"
          :key="day"
          class="calendar-cell"
          :class="{
            'calendar-cell--today': isToday(day),
          }"
          @click="showDetail"
        >
          <span class="calendar-day">
            {{ day }}
          </span>

          <template v-if="getSchedule(day)">
            <div
  class="calendar-duty"
  :style="{
    background: getDutyColor(getSchedule(day)?.duty_type ?? '')
  }"
>
  {{ getSchedule(day)?.duty_type }}
</div>

<small>
  {{ getSchedule(day)?.count_schedules }} flights
</small>

            <small>
              {{ getSchedule(day)?.count_schedules }}
              Schedule(s)
            </small>
          </template>
        </div>
      </div>

      <!-- Legend -->
      <div class="calendar-legend">
        <div
          v-for="item in schedules.legend"
          :key="item.code"
          class="legend-item"
        >
          <span
            class="legend-color"
            :style="{ background: item.color }"
          />

          <span class="legend-code">
            {{ item.code }}
          </span>

          <span class="legend-label">
            {{ item.label }}
          </span>
        </div>
      </div>
    </AppCard>
  </div>
</template>

<style scoped lang="scss">
.page-title{
  margin-bottom:20px;
  font-size:30px;
  font-weight:700;
  color:#0E2138;
}

/* HEADER */

.calendar-header{
  display:flex;
  align-items:center;
  justify-content:space-between;

  margin-bottom:28px;
}

.calendar-header h2{
  font-size:24px;
  font-weight:700;
  color:#0E2138;
}

.calendar-header button{
  width:42px;
  height:42px;

  border:none;
  border-radius:12px;

  background:#F8FAFC;

  cursor:pointer;

  transition:.2s;
}

.calendar-header button:hover{
  background:#E63757;
  color:#fff;
}

/* WEEKDAY */

.calendar-weekdays{
  display:grid;
  grid-template-columns:repeat(7,1fr);

  margin-bottom:14px;
}

.calendar-weekdays span{
  text-align:center;

  font-size:13px;

  font-weight:700;

  color:#64748B;
}

/* GRID */

.calendar-grid{
  display:grid;

  grid-template-columns:repeat(7,1fr);

  gap:12px;
}

/* CELL */

.calendar-cell{
  min-height:118px;

  padding:12px;

  border:1px solid #E5E7EB;

  border-radius:16px;

  background:#fff;

  cursor:pointer;

  transition:.25s ease;

  display:flex;

  flex-direction:column;
}

.calendar-cell:hover{
  transform:translateY(-3px);

  box-shadow:0 10px 24px rgba(14,33,56,.08);
}

.calendar-cell--empty{
  visibility:hidden;
}

.calendar-day{
  font-size:16px;

  font-weight:700;

  color:#0E2138;

  margin-bottom:10px;
}

/* TODAY */

.calendar-cell--today{
  border:2px solid #E63757;

  background:#FFF5F7;

  box-shadow:0 0 0 5px rgba(230,55,87,.08);
}

.calendar-cell--today .calendar-day{
  color:#E63757;
}

/* DUTY */

.calendar-duty{
  padding:6px 10px;

  border-radius:999px;

  color:#fff;

  font-size:12px;

  font-weight:700;

  display:inline-flex;

  width:fit-content;

  margin-bottom:8px;
}

.calendar-cell small{
  color:#64748B;

  font-size:12px;
}

/* LEGEND */

.calendar-legend{
  display:flex;

  flex-wrap:wrap;

  gap:18px;

  margin-top:28px;

  padding-top:20px;

  border-top:1px solid #E5E7EB;
}

.legend-item{
  display:flex;

  align-items:center;

  gap:8px;
}

.legend-color{
  width:12px;
  height:12px;

  border-radius:50%;
}

.legend-code{
  font-weight:700;

  color:#0E2138;
}

.legend-label{
  color:#64748B;
}

/* MOBILE */

@media(max-width:768px){

.calendar-grid{

gap:8px;

}

.calendar-cell{

min-height:90px;

padding:8px;

}

.calendar-day{

font-size:14px;

}

.calendar-duty{

font-size:10px;

padding:4px 8px;

}

.calendar-cell small{

font-size:10px;

}

.calendar-header h2{

font-size:20px;

}

}
</style>