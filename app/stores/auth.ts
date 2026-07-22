import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth", () => {
  const token = useCookie<string | null>("crew-token")

  const user = ref<{
    email: string
    name: string
  } | null>(null)

  const isAuthenticated = computed(() => !!token.value)

  function login(email: string) {
    token.value = "logged-in"

    user.value = {
      email,
      name: "John Doe",
    }
  }

  function logout() {
    token.value = null
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
  }
})