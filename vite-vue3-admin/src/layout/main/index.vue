<template>
  <div class="container-main">
    <Backtop target=".container-main"></Backtop>
    <router-view v-slot="{ Component, route }">
      <!-- 使用任何自定义过渡和回退到 `fade`，out-in表示先退出再进入，防止页面元素同时出现，导致页面跳动 -->
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive v-if="route.meta.cache">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<script setup lang="ts">
  import Backtop from '@/components/backtop/index.vue'
</script>
<style lang="scss">
  .container-main {
    height: 100%;
    max-height: 100%;
    overflow: auto;
  }
</style>
