<template>
  About
  <a-button @click="goHome"> 跳转Home </a-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

let router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<style scoped></style>
