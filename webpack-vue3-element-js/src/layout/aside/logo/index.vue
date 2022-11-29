<template>
  <div class="container-logo flex-center">
    <img class="logo" :src="LogoImage"/>
    <div class="title">{{title}}</div>
  </div>
</template>

<script setup>
  import LogoImage from '@/assets/logo.png'
  import {useStore} from 'vuex'

  const store = useStore()
  const title = store.state.info.title
</script>

<style scoped lang="scss">
.container-logo {
  height: 60px;
  .logo {
    width: 50px;
    height: 50px;
  }
  .title {
    color: #ffffff;
    font-weight: 700;
  }
}
</style>