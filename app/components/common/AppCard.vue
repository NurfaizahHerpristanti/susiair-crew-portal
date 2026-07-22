<template>
  <div class="app-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.app-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;

  box-shadow: 0 2px 12px rgba(0, 0, 0, .05);

  transition:
    transform .2s ease,
    box-shadow .2s ease;
}

.app-card:hover {
  transform:
translateY(-6px)
scale(1.015);

box-shadow:
0 20px 40px rgba(15,23,42,.12);

  box-shadow: 0 12px 32px rgba(0, 0, 0, .12);
}
</style>