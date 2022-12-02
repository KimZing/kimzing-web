<template>
  <a-back-top :target="getTarget" />
</template>

<script setup lang="ts">
const props = defineProps<{ id: string }>()

const getTarget = (): HTMLElement => {
  return document.getElementById(props.id)!
}
</script>

<style scoped></style>
