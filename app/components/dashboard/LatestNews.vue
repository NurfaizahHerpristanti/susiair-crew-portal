<script setup lang="ts">
import AppCard from "~/components/common/AppCard.vue"
import { useNewsStore } from "~/stores/news"

const store = useNewsStore()
</script>

<template>
  <div>
    <h2 class="section-title">
      Latest News
    </h2>

    <div class="news-list">
      <AppCard
        v-for="item in store.news"
        :key="item.id"
        class="news-card"
      >
        <p class="news-date">
          {{ item.date }}
        </p>

        <h3 class="news-title">
          {{ item.title }}
        </h3>

        <p class="news-summary">
          {{ item.summary }}
        </p>

        <button class="news-button">
          Read More →
        </button>
      </AppCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-list{
  display:flex;
  gap:16px;

  overflow-x:auto;

  padding-bottom:8px;
}

.news-list::-webkit-scrollbar{
  display:none;
}

.news-card{
  min-width:260px;

  transition:.2s;
}

.news-card:hover{
  transform:translateY(-4px);
}

.news-date{
  font-size:13px;

  color:#6B7280;

  margin-bottom:8px;
}

.news-title{
  font-size:18px;

  font-weight:700;

  color:#0E2138;

  margin-bottom:10px;
}

.news-summary{
  color:#6B7280;

  line-height:1.6;

  margin-bottom:20px;
}

.news-button{
  border:none;

  background:none;

  color:#E63757;

  font-weight:600;

  cursor:pointer;

  transition:.2s;
}

.news-button:hover{
  transform:translateX(4px);
}
</style>