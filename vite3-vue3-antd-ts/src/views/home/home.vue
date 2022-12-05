<template>
  Home
  <div v-for="i in 100" :key="i"> aaa </div>
  <a-button @click="goAbout"> 跳转About </a-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

let router = useRouter()

const goAbout = () => {
  router.push('/about')
}
</script>

<style scoped></style>
