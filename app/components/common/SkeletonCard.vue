<template>
  <div class="skeleton">
    <div class="skeleton__title" />
    <div class="skeleton__line" />
    <div class="skeleton__line short" />
  </div>
</template>

<style scoped lang="scss">
.skeleton{
  padding:24px;
  border-radius:20px;
  background:white;
  border:1px solid #EDF2F7;
}

.skeleton__title,
.skeleton__line{
  border-radius:8px;
  background:linear-gradient(
    90deg,
    #F1F5F9 25%,
    #E2E8F0 50%,
    #F1F5F9 75%
  );

  background-size:200% 100%;

  animation:loading 1.2s infinite;
}

.skeleton__title{
  width:40%;
  height:18px;
  margin-bottom:20px;
}

.skeleton__line{
  width:100%;
  height:14px;
  margin-bottom:12px;
}

.short{
  width:60%;
}

@keyframes loading{

0%{
background-position:200% 0;
}

100%{
background-position:-200% 0;
}

}
</style>