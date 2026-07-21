<script setup lang="ts">
import AppButton from "~/components/common/AppButton.vue"
import AppInput from "~/components/common/AppInput.vue"

definePageMeta({
  layout: "auth",
})

const email = ref("")
const password = ref("")
</script>

<template>
  <div class="login">
    <div class="login-card">
      <h1 class="login-title">
        Susi Air Crew Portal
      </h1>

      <p class="login-subtitle">
        Please sign in to continue
      </p>

      <div class="login-form">
        <AppInput
          v-model="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />

        <AppInput
          v-model="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        <AppButton
          label="Sign In"
          type="submit"
        />
      </div>
    </div>
  </div>
</template>