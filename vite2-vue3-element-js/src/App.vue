<template>
  <el-config-provider :locale="locale">
    <router-view v-slot="{ Component, route }">
      <!-- 使用任何自定义过渡和回退到 `fade`，out-in表示先退出再进入，防止页面元素同时出现，导致页面跳动 -->
      <transition :name="route.meta.transition || 'fade'" mode="out-in">
        <keep-alive v-if="route.meta.cache">
          <component :is="Component" />
        </keep-alive>
        <component v-else :is="Component"></component>
      </transition>
    </router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
  import zhCn from 'element-plus/es/locale/lang/zh-cn'
  import en from 'element-plus/es/locale/lang/en'
  import { ref, watch } from 'vue'
  import { useTypeStore } from './store'

  const store = useTypeStore()
  const locale = ref(zhCn)

  watch(
    () => store.state.setting.language.current,
    (lang) => {
      if (lang === 'en') {
        locale.value = en
      }
      if (lang === 'zh') {
        locale.value = zhCn
      }
    }
  )
</script>
