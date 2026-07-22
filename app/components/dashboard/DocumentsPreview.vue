<script setup lang="ts">
import {
  FileText,
  ShieldCheck,
  BadgeCheck,
  ChevronRight,
} from "lucide-vue-next"

import AppCard from "~/components/common/AppCard.vue"
import { useDocumentsStore } from "~/stores/documents"
import DocumentsPreview from "~/components/dashboard/DocumentsPreview.vue"

const documents = useDocumentsStore()

function getStatus(expiryDate: string) {
  const today = new Date(documents.today)
  const expiry = new Date(expiryDate)

  const diff = Math.ceil(
    (expiry.getTime() - today.getTime()) /
    (1000 * 60 * 60 * 24),
  )

  if (diff < 0) {
    return {
      text: "Expired",
      class: "status-danger",
    }
  }

  if (diff <= documents.thresholds.warningDays) {
    return {
      text: "Expiring Soon",
      class: "status-warning",
    }
  }

  return {
    text: "Valid",
    class: "status-safe",
  }
}

function getIcon(label: string) {
  const name = label.toLowerCase()

  if (name.includes("medical"))
    return ShieldCheck

  if (
    name.includes("license") ||
    name.includes("licence")
  )
    return BadgeCheck

  return FileText
}
</script>

<template>
  <AppCard>

    <h2 class="section-title">
      My Documents
    </h2>

    <div
      v-for="doc in documents.documents"
      :key="doc.id"
      class="document-item"
      :class="getStatus(doc.expiryDate).class"
    >

      <div class="document-left">

        <div class="document-icon">

          <component
            :is="getIcon(doc.label)"
            :size="22"
          />

        </div>

        <div>

          <h3 class="document-name">
            {{ doc.label }}
          </h3>

          <small>
            Expires
            {{ doc.expiryDate }}
          </small>

        </div>

      </div>

      <div class="document-right">

        <span
          class="document-badge"
          :class="getStatus(doc.expiryDate).class"
        >
          {{ getStatus(doc.expiryDate).text }}
        </span>

        <ChevronRight :size="18" />

      </div>

    </div>

  </AppCard>
</template>

<style scoped lang="scss">
.section-title{
  font-size:20px;
  font-weight:700;
  margin-bottom:22px;
  color:#0E2138;
}

.document-item{

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:18px;

  margin-bottom:14px;

  background:#F8FAFC;

  border:1px solid #E2E8F0;

  border-radius:16px;

  transition:.25s ease;

}

.document-item:hover{

  background:#FFFFFF;

  border-color:#CBD5E1;

  box-shadow:
    0 10px 24px rgba(15,23,42,.08);

  transform:translateY(-2px);

}

.document-left{

  display:flex;
  align-items:center;

  gap:16px;

}

.document-icon{

  width:52px;
  height:52px;

  border-radius:16px;

  background:#EEF6FF;

  color:#2563EB;

  display:flex;
  justify-content:center;
  align-items:center;

  flex-shrink:0;

}

.document-name{

  font-size:16px;
  font-weight:700;

  color:#0E2138;

  margin-bottom:4px;

}

.document-left small{

  color:#64748B;

}

.document-right{

  display:flex;
  align-items:center;

  gap:14px;

  color:#94A3B8;

}

.document-badge{

  display:inline-flex;
  align-items:center;
  justify-content:center;

  min-width:120px;

  padding:8px 14px;

  border-radius:999px;

  font-size:12px;

  font-weight:700;

}
.status-safe{

  background:#ECFDF5;

  color:#15803D;

}

.status-warning{

  background:#FEF3C7;

  color:#B45309;

}

.status-danger{

  background:#FDECEF;

  color:#DC2626;

}

.document-item.status-danger{

  border-left:4px solid #E63757;

  padding-left:12px;

}

.document-item.status-warning{

  border-left:4px solid #F59E0B;

  padding-left:12px;

}

@media(max-width:768px){

.document-item{

flex-direction:column;

align-items:flex-start;

gap:12px;

}

.document-right{

  display:flex;
  align-items:center;

  gap:20px;

  color:#94A3B8;

}

.document-right svg{

  opacity:.35;

  transition:.25s;

}

.document-item:hover .document-right svg{

  opacity:1;

  transform:translateX(4px);

}

}
</style>