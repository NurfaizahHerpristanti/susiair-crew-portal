<script setup lang="ts">
import { computed, ref } from "vue"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "vue-chartjs"

import { useCrewStore } from "~/stores/crew"
import { useFlightHours } from "~/composables/useFlightHours"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

type Period =
  | "1w"
  | "1m"
  | "3m"
  | "6m"
  | "1y"

const selectedRange = ref<Period>("1w")

const crew = useCrewStore()

const { getRollingSeries } = useFlightHours()

const bounds = computed(() =>
  crew.chartBounds[selectedRange.value],
)

const series = computed(() =>
  getRollingSeries(selectedRange.value),
)

/**
 * Today selalu berada di tengah
 * karena data = 7 hari sebelum
 * + hari ini
 * + 7 hari sesudah
 */
const todayIndex = 7

const chartData = computed(() => ({
  labels: series.value.map(item => item.label),

  datasets: [
    {
      label: "Rolling Hours",

      data: series.value.map(item => item.total),

      borderColor: "#22C5E8",

      borderWidth: 3,

      tension: .45,

      fill: true,

      borderCapStyle: "round" as const,

      borderJoinStyle: "round" as const,

      backgroundColor(context: any) {

        const chart = context.chart

        const { ctx, chartArea } = chart

        if (!chartArea)
          return

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom,
        )

        gradient.addColorStop(
          0,
          "rgba(34,197,232,.45)",
        )

        gradient.addColorStop(
          .45,
          "rgba(34,197,232,.18)",
        )

        gradient.addColorStop(
          1,
          "rgba(34,197,232,0)",
        )

        return gradient
      },

      pointRadius(context: any) {
        return context.dataIndex === todayIndex
          ? 7
          : 2
      },

      pointHoverRadius: 9,

      pointBackgroundColor(context: any) {

        return context.dataIndex === todayIndex
          ? "#E63757"
          : "#22C5E8"

      },

      pointBorderColor: "#FFFFFF",

      pointBorderWidth: 3,

    },

    {
      label: "Limit",

      data: Array(series.value.length).fill(
        bounds.value.limit,
      ),

      borderColor: "#E63757",

      borderWidth: 2,

      borderDash: [8, 6],

      pointRadius: 0,

      fill: false,
    },
  ],
}))

const options = computed(() => ({

  responsive: true,

  maintainAspectRatio: false,

  animation: {

    duration: 700,

    easing: "easeOutQuart" as const,

  },

  interaction: {

    mode: "index" as const,

    intersect: false,

  },

  scales: {

    x: {

      grid: {

        display: false,

      },

      ticks: {

        color: "#64748B",

        font: {

          size: 11,

        },

      },

    },

    y: {

      beginAtZero: true,

      max: bounds.value.max,

      ticks: {

        color: "#64748B",

        font: {

          size: 11,

        },

      },

      grid: {

        color: "rgba(148,163,184,.18)",

      },

    },

  },

  plugins: {

    legend: {

      display: false,

    },

    tooltip: {

      displayColors: false,

      backgroundColor: "#FFFFFF",

      titleColor: "#0E2138",

      bodyColor: "#334155",

      borderColor: "#E2E8F0",

      borderWidth: 1,

      cornerRadius: 12,

      padding: 14,

      callbacks: {

        label(context: any) {

          return `${context.parsed.y.toFixed(1)} hrs`

        },

      },

    },

  },

}))
</script>

<template>
  <AppCard class="chart-card">
    <div class="chart-header">
      <div>
        <p class="chart-subtitle">
          Flight Analytics
        </p>

        <h2>
          Flight Hours Trend
        </h2>
      </div>

      <div class="chart-toggle">
        <button
          v-for="range in ['1w','1m','3m','6m','1y']"
          :key="range"
          :class="{ active: selectedRange === range }"
          @click="selectedRange = range"
        >
          {{ range }}
        </button>
      </div>
    </div>

    <div class="chart-summary">
      <div>
        <span>Rolling Hours</span>

        <h3>
          {{ series.at(-1)?.total }}
          <small>/ {{ bounds.limit }} hrs</small>
        </h3>
      </div>

      <div class="today-badge">
        Today
      </div>
    </div>

    <div class="chart-wrapper">
      <Line
        :data="chartData"
        :options="options"
      />
    </div>
  </AppCard>
</template>

<style scoped lang="scss">

.chart-card{

padding:24px;

}

.chart-header{

display:flex;

justify-content:space-between;

align-items:flex-start;

margin-bottom:24px;

gap:18px;

}

.chart-subtitle{

font-size:13px;

font-weight:600;

color:#64748B;

margin-bottom:4px;

text-transform:uppercase;

letter-spacing:.08em;

}

.chart-header h2{

font-size:22px;

font-weight:700;

color:#0E2138;

}

.chart-toggle{

display:flex;

gap:8px;

flex-wrap:wrap;

}

.chart-toggle button{

border:none;

outline:none;

padding:8px 16px;

border-radius:999px;

background:#F1F5F9;

color:#64748B;

font-size:13px;

font-weight:600;

cursor:pointer;

transition:.25s;

}

.chart-toggle button:hover{

background:#E2E8F0;

}

.chart-toggle button.active{

background:#E63757;

color:#fff;

box-shadow:

0 8px 20px rgba(230,55,87,.28);

transform:translateY(-1px);

}

.chart-summary{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:20px;

}

.chart-summary span{

display:block;

font-size:13px;

color:#64748B;

margin-bottom:6px;

}

.chart-summary h3{

font-size:28px;

font-weight:700;

color:#0E2138;

line-height:1;

}

.chart-summary small{

font-size:15px;

font-weight:500;

color:#64748B;

}

.today-badge{

padding:8px 14px;

border-radius:999px;

background:#FDECEF;

color:#E63757;

font-size:13px;

font-weight:700;

}

.chart-wrapper{

height:340px;

}

@media(max-width:768px){

.chart-card{

padding:18px;

}

.chart-header{

flex-direction:column;

}

.chart-summary{

flex-direction:column;

align-items:flex-start;

gap:12px;

}

.chart-summary h3{

font-size:24px;

}

.chart-wrapper{

height:280px;

}

.chart-toggle{

width:100%;

overflow:auto;

padding-bottom:2px;

}

.chart-toggle::-webkit-scrollbar{

display:none;

}

}

</style>