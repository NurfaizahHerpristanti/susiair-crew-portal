<script setup lang="ts">
import { ref } from "vue"

import {
  Bell,
  Plane,
  FileText,
  ShieldAlert,
} from "lucide-vue-next"

import { useNotificationStore } from "~/stores/notifications"

const store = useNotificationStore()

const open = ref(false)

function getIcon(type: string) {
  switch (type) {
    case "flight":
      return Plane

    case "memo":
      return FileText

    default:
      return ShieldAlert
  }
}
</script>

<template>

<div class="notify">

<button
class="notify-btn"
@click="open=!open"
>

<Bell :size="20"/>

<span
v-if="store.unread"
class="notify-count"
>

{{ store.unread }}

</span>

</button>

<Transition name="dropdown">

<div
v-if="open"
class="notify-menu"
>

<h3>

Notifications

</h3>

<div
v-for="item in store.notifications"
:key="item.id"
class="notify-item"
>

<component
:is="getIcon(item.icon)"
:size="18"
/>

<div>

<p>

{{ item.title }}

</p>

<small>

{{ item.unread ? "Unread" : "Read" }}

</small>

</div>

</div>

</div>

</Transition>

</div>

</template>

<style scoped lang="scss">

.notify{

position:relative;

}

.notify-btn{

position:relative;

border:none;

background:white;

width:46px;

height:46px;

border-radius:14px;

cursor:pointer;

display:flex;

align-items:center;

justify-content:center;

box-shadow:0 4px 16px rgba(0,0,0,.06);

transition:.25s;

}

.notify-btn:hover{

transform:translateY(-2px);

}

.notify-count{

position:absolute;

top:-4px;

right:-4px;

width:22px;

height:22px;

border-radius:50%;

background:#E63757;

color:white;

font-size:12px;

font-weight:700;

display:flex;

align-items:center;

justify-content:center;

}

.notify-menu{

position:absolute;

right:0;

top:60px;

width:330px;

background:white;

border-radius:18px;

padding:18px;

box-shadow:0 20px 40px rgba(0,0,0,.12);

z-index:99;

}

.notify-menu h3{

margin-bottom:14px;

font-size:18px;

}

.notify-item{

display:flex;

gap:12px;

padding:12px 0;

border-bottom:1px solid #EEF2F7;

}

.notify-item:last-child{

border:none;

}

.notify-item p{

font-weight:600;

margin-bottom:4px;

}

.notify-item small{

color:#64748B;

}

.dropdown-enter-active,
.dropdown-leave-active{

transition:.25s;

}

.dropdown-enter-from,
.dropdown-leave-to{

opacity:0;

transform:translateY(-10px);

}

</style>