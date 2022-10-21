<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>layout</div>
  <n-space>
    <n-button size="large" type="primary" @click="router.push('/home/custom')">
      custom
    </n-button>
    <n-button size="large" type="primary" @click="router.push('/home/unocss')">
      UnoCSS
    </n-button>
  </n-space>
  <div />
  <RouterView />
</template>

<style lang="scss" scoped></style>
