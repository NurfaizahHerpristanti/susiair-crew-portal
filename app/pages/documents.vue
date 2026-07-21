<script setup lang="ts">
import { useDocumentsStore } from "~/stores/documents"

definePageMeta({
  layout: "default",
})

const documents = useDocumentsStore()

function getStatus(expiryDate: string) {
  const today = new Date(documents.today)
  const expiry = new Date(expiryDate)

  const diff = Math.ceil(
    (expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  )

  if (diff < 0) {
    return {
      text: `Expired ${Math.abs(diff)} days ago`,
      class: "status-danger",
    }
  }

  if (diff <= documents.warningDays) {
    return {
      text: `${diff} days remaining`,
      class: "status-warning",
    }
  }

  return {
    text: `${diff} days remaining`,
    class: "status-safe",
  }
}
</script>

<template>
  <div>
    <h1 class="page-title">
      Documents
    </h1>

    <div class="dashboard-grid">
      <AppCard
        v-for="doc in documents.documents"
        :key="doc.id"
      >
        <h3>{{ doc.label }}</h3>

        <p>{{ doc.expiryDate }}</p>

        <p :class="getStatus(doc.expiryDate).class">
          {{ getStatus(doc.expiryDate).text }}
        </p>
      </AppCard>
    </div>
  </div>
</template>