<template>
  <div class="container-parent">
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
<script setup lang="ts"></script>
<style lang="scss" scoped>
  .container-parent {
    width: 100%;
    height: 100%;
    background-color: #f0f2f5;
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    overflow: auto;
  }
</style>
