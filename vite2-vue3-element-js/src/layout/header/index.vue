<template>
  <div class="container-header full" :style="{ backgroundColor }">
    <div class="left">
      <SwitchIcon
        class="switch-icon"
        :status="menuCollapse"
        v-show="sidebarVisible"
        @changeStatus="changeCollapsedSidebar"
      />
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="right">
      <Screenfull />
      <LanguageSelect></LanguageSelect>
      <SystemSetting />
      <UserDropdown></UserDropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { useTypeStore } from '@/store'
  import Screenfull from '@/components/screenfull/index.vue'
  import SwitchIcon from '@/components/switch-icon/index.vue'
  import { LayoutMutations } from '@/store/layout/consts'
  import Breadcrumb from '@/components/breadcrumb/index.vue'
  import UserDropdown from '@/layout/header/components/user-dropdown/index.vue'
  import SystemSetting from './components/system-setting/index.vue'
  import LanguageSelect from './components/language-select/index.vue'

  const store = useTypeStore()

  // 是否显示菜单栏
  const sidebarVisible = computed(() => store.state.setting.visible.sidebar)

  // 折叠菜单栏
  const menuCollapse = computed(() => store.state.layout.menuCollapse)
  const changeCollapsedSidebar = () => {
    store.commit(LayoutMutations.CHANGE_MENU_COLLAPSE)
  }

  // 属性设置
  const backgroundColor = computed(() => store.state.setting.color.headerBackground)
</script>
<style lang="scss" scoped>
  .container-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      height: 100%;
      display: flex;
      & > * {
        padding: 0 10px;
      }
      .switch-icon {
        padding-right: 0;
        &:hover {
          background-color: $icon-background-color;
        }
      }
    }
    .right {
      height: 100%;
      display: flex;
      & > * {
        padding: 0 10px;
        &:hover {
          background-color: $icon-background-color;
        }
      }
    }
  }
</style>
