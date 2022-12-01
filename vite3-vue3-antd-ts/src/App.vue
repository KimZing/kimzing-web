<template>
  <router-view />
</template>
<script lang="ts" setup>
import { getInfo } from '@/apis/info'

getInfo().then((data) => {
  console.log(data)
})
</script>
