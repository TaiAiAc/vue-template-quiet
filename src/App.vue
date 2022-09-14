<script setup lang="ts"></script>

<template>
  <icon-custom-10k class="icon" />
  <RouterView />
</template>

<style lang="scss" scoped>
.icon {
  @apply text-60px text-green-400 fill-current hover:(text-blue-400 text-50px);
}
</style>
