<script setup lang="ts">
import { useAuthStore } from "~/stores/auth"

const auth = useAuthStore()

const email = ref("")
const password = ref("")

function login() {
  auth.login(email.value)
  navigateTo("/dashboard")
}

definePageMeta({
  layout: false,
  middleware: "guest",
})
</script>

<template>
  <div class="login">
    <div class="login-card">
      <img
        src="/logo2.png.png"
        class="login-logo"
      >

      <h1>Crew Portal</h1>

      <p>Welcome back</p>

      <input
        v-model="email"
        placeholder="Email"
      >

      <input
        v-model="password"
        type="password"
        placeholder="Password"
      >

      <button @click="login">
        Sign In
      </button>
    </div>
  </div>
</template>

<style scoped>
.login{
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#F5F7FB;
}

.login-card{
width:380px;
background:white;
padding:40px;
border-radius:20px;
box-shadow:0 20px 40px rgba(0,0,0,.08);
text-align:center;
}

.login-logo{
width:170px;
margin-bottom:24px;
}

input{
width:100%;
padding:14px;
margin-top:16px;
border:1px solid #D7DEE7;
border-radius:12px;
}

button{
margin-top:24px;
width:100%;
padding:14px;
border:none;
background:#E63757;
color:white;
border-radius:12px;
font-weight:700;
cursor:pointer;
}
</style>