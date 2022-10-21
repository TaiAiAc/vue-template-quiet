<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <main class="px-16 py-40 text-center">
    <p class="mt-15 text-20 font-bold color-gray-400">
      UnoCSS 指北
    </p>

    <section class="mt-20 w-360 mx-auto flex flex-wrap justify-around p-10 card-shadow rounded-10 dark:b">
      <div class="w-50 h-50 b-1 rounded-5 f-c-c p-10 m-20">
        <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
      </div>
      <div class="w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20">
        <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        <span class="w-6 h-6 rounded-3 self-end bg-black dark:bg-white" />
      </div>
      <div class="w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20">
        <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        <span class="w-6 h-6 rounded-3 self-center bg-black dark:bg-white" />
        <span class="w-6 h-6 rounded-3 self-end bg-black dark:bg-white" />
      </div>
      <div class="w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20">
        <div class="flex-col justify-between">
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        </div>
        <div class="flex-col justify-between">
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        </div>
      </div>
      <div class="w-50 h-50 b-1 rounded-5 flex-col justify-between items-center p-10 m-20">
        <div class="flex w-full justify-between">
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        </div>
        <div class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        <div class="flex w-full justify-between">
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        </div>
      </div>
      <div class="w-50 h-50 b-1 rounded-5 flex-col justify-between p-10 m-20">
        <div class="flex w-full justify-between">
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        </div>
        <div class="flex w-full justify-between">
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        </div>
        <div class="flex w-full justify-between">
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
          <span class="w-6 h-6 rounded-3 bg-black dark:bg-white" />
        </div>
      </div>
    </section>

    <p class="mt-20 text-14 color-gray-400">
      Flex骰子
    </p>
  </main>
</template>

<style lang="scss" scoped></style>
