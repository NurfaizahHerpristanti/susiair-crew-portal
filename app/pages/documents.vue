<script setup lang="ts">
import { useDocumentsStore } from "~/stores/documents"
import {
  FileText,
  ChevronRight,
} from "lucide-vue-next"

definePageMeta({
  layout: "default",
  middleware: "auth",
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

 if (diff <= documents.thresholds.warningDays) {
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

    <div class="dashboard-grid">
      <AppCard
        v-for="doc in documents.documents"
        :key="doc.id"
        class="document-card"
        :class="getStatus(doc.expiryDate).class"
      >
        <div class="document-header">
          <div class="document-icon">
            📄
          </div>

          <div>
            <h3 class="document-title">
              {{ doc.label }}
            </h3>

            <p class="document-date">
              {{
                new Date(doc.expiryDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              }}
            </p>
          </div>
        </div>

        <div class="document-footer">
          <span
            class="status-pill"
            :class="getStatus(doc.expiryDate).class"
          >
            {{ getStatus(doc.expiryDate).text }}
          </span>

          →
        </div>
      </AppCard>
    </div>
  </div>
</template>

<style scoped lang="scss">

.dashboard-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
  gap:20px;
}

.document-card{

  transition:.25s;

  cursor:pointer;
}

.document-card:hover{

  transform:translateY(-6px);

}

.document-header{

  display:flex;
  gap:16px;
  align-items:center;

  margin-bottom:24px;

}

.document-icon{

  width:54px;
  height:54px;

  border-radius:14px;

  background:#EEF6FF;

  display:flex;
  justify-content:center;
  align-items:center;

  font-size:26px;

}

.document-title{

  font-size:18px;
  font-weight:700;

  color:#0E2138;

  margin-bottom:6px;

}

.document-date{

  color:#64748B;

}

.document-footer{

  display:flex;
  justify-content:space-between;
  align-items:center;

}

.status-pill{

  padding:8px 14px;

  border-radius:999px;

  font-weight:600;

  font-size:13px;

}

.status-safe{

  background:#DCFCE7;

  color:#15803D;
}

.status-warning{

  background:#FEF3C7;

  color:#B45309;
}

.status-danger{

  background:#FDE2E2;

  color:#DC2626;
}

.document-card.status-danger{

  border-left:5px solid #E63757;

}

.document-card.status-warning{

  border-left:5px solid #F59E0B;

}

.document-card.status-safe{

  border-left:5px solid #22C55E;

}

</style>