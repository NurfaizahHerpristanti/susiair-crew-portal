<template>
  <main class="auth-layout">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.auth-layout {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f8fb;
  padding: 24px;
}
</style>