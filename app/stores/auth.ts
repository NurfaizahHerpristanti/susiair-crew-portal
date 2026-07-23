import { defineStore } from "pinia"

export const useAuthStore = defineStore("auth", () => {
  const token = useCookie<string | null>("crew-token")

  const user = ref<{
  email: string
  name: string
  role: string
} | null>(null)

  const isAuthenticated = computed(() => !!token.value)

 const accounts = [
    {
      email: "captain@susiair.com",
      password: "captain123",
      name: "Captain John Doe",
      role: "Captain",
    },
    {
      email: "copilot@susiair.com",
      password: "copilot123",
      name: "First Officer Jane",
      role: "First Officer",
    },
    {
      email: "admin@susiair.com",
      password: "admin123",
      name: "Crew Admin",
      role: "Admin",
    },
  ]

   function login(email: string, password: string) {
    const account = accounts.find(
      (a) => a.email === email && a.password === password,
    )

    if (!account) {
      return false
    }

    token.value = crypto.randomUUID()

    user.value = {
      email: account.email,
      name: account.name,
      role: account.role,
    }

    return true
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