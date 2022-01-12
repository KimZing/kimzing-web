<template>
  <div class="container-logo flex-center">
    <img class="logoImage" :src="LogoImage" />
    <div class="logoTitle" v-show="!menuCollapse"> {{ title }} </div>
  </div>
</template>
<script setup lang="ts">
  // logo标志，可设置是否显示标题
  import { computed } from 'vue'
  import LogoImage from '@/assets/images/logo/logo.png'
  import { useTypeStore } from '@/store'

  const store = useTypeStore()

  const menuCollapse = computed(() => store.state.layout.menuCollapse)
  const title = computed(() => store.state.layout.title)
</script>
<style lang="scss" scoped>
  .container-logo {
    height: 40px;
    padding: 18px 10px;
    .logoImage {
      width: 50px;
      height: 50px;
    }
    .logoTitle {
      color: #fff;
      font-weight: 700;
    }
  }
</style>
