<template>
  <Form v-bind="config" class="container-form" @submit="onSubmit"></Form>
</template>

<script setup>
  import Form from '@/components/form'
  import {config} from '@/views/demo/form/config'

  const onSubmit = (state) => {
    console.log(state)
  }
</script>

<style scoped lang="scss">
.container-form {
  box-sizing: border-box;
  height: 100%;
  background-color: #ffffff;
  padding: 15px 5px;
}
</style>