<script setup lang="ts">
import { useAuthStore } from "~/stores/auth"

const auth = useAuthStore()

const email = ref("")
const password = ref("")
const errorMessage = ref("")

function login() {
  errorMessage.value = ""

  const success = auth.login(
    email.value,
    password.value,
  )
  

  if (!success) {
    errorMessage.value = "Invalid email or password"
    return
  }

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

      <p>Welcome back!</p>

      <input
        v-model="email"
        placeholder="Email"
      >

      <input
        v-model="password"
        type="password"
        placeholder="Password"
      >

      <p
  v-if="errorMessage"
  class="login-error"
>
  {{ errorMessage }}
</p>

      <button @click="login">
        Sign In
      </button>
      <div class="demo-account">
  <h4>Demo Accounts</h4>

  <p>
    <strong>Captain</strong><br>
    usn: captain@susiair.com<br>
    pass: captain123
  </p>

  <p>
    <strong>Admin</strong><br>
    usn: admin@susiair.com<br>
    pass: admin123
  </p>
</div>
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

.login-error{
margin-top:12px;
color:#E63757;
font-size:14px;
font-weight:600;
}

.demo-account{
  margin-top:28px;
  padding:16px;
  background:#F8F9FB;
  border-radius:12px;
  text-align:left;
  font-size:13px;
  color:#666;
}

.demo-account h4{
  margin-bottom:10px;
  color:#222;
}

.demo-account p{
  margin-top:10px;
  line-height:1.6;
}
</style>