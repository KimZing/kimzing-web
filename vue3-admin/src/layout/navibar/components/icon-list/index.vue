<template>
  <div class="container-icon-list">
    <div class="navibar-right-item">
      <el-dropdown>
        <i class="el-icon-arrow-down"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="closeLeftTag"
              ><i class="el-icon-arrow-left"></i>关闭左侧标签</el-dropdown-item
            >
            <el-dropdown-item @click="closeRightTag"
              ><i class="el-icon-arrow-right"></i>关闭右侧标签</el-dropdown-item
            >
            <el-dropdown-item @click="closeOtherTag"
              ><i class="el-icon-c-scale-to-original"></i>关闭其他标签</el-dropdown-item
            >
            <el-dropdown-item @click="closeAllTag"
              ><i class="el-icon-minus"></i>关闭全部标签</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <el-tooltip effect="dark" :content="t('layout.navibar.tip.refresh')" placement="bottom">
      <div class="navibar-right-item">
        <i class="el-icon-refresh" :class="{ 'refresh-element': refresh }" @click="refreshTab"></i>
      </div>
    </el-tooltip>
    <el-tooltip effect="dark" :content="t('layout.navibar.tip.fullscreen')" placement="bottom">
      <div class="navibar-right-item" @click="fullScreenMain">
        <i class="iconfont icon-quanping"></i>
      </div>
    </el-tooltip>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { SettingMutations } from '@/store/setting/consts'
  import { useTypeStore } from '@/store'
  import { useT } from '@/locals'
  import { useTag } from '../tag-list/useTag'

  const store = useTypeStore()
  const t = useT()
  const tagHelper = useTag()

  const visible = computed(() => store.state.setting.visible)

  // 全屏化组件，隐藏layout
  const fullScreenMain = () => {
    store.commit(SettingMutations.CHANGE_VISIBLE, {
      name: 'header',
      visible: !visible.value.header
    })
    store.commit(SettingMutations.CHANGE_VISIBLE, {
      name: 'sidebar',
      visible: !visible.value.sidebar
    })
  }

  const closeLeftTag = () => {
    tagHelper.closeLeftTag()
  }
  const closeRightTag = () => {
    tagHelper.closeRightTag()
  }
  const closeOtherTag = () => {
    tagHelper.closeOtherTag()
  }
  const closeAllTag = () => {
    tagHelper.closeAll()
  }

  // 刷新tab功能
  // 控制刷新按钮动画
  const refresh = ref(false)
  // 刷新主体内容，将main的可视化从true设置为false，500毫秒后再设置为true
  const refreshTab = () => {
    refresh.value = true
    store.commit(SettingMutations.CHANGE_VISIBLE, { name: 'main', visible: false })
    // 300毫秒后重新渲染当前主体组件
    setTimeout(() => {
      refresh.value = false
      store.commit(SettingMutations.CHANGE_VISIBLE, { name: 'main', visible: true })
    }, 200)
  }
</script>

<style lang="scss" scoped>
  .container-icon-list {
    height: 100%;
    display: flex;

    .navibar-right-item {
      height: 100%;
      padding: 0 10px 0 10px;
      display: flex;
      align-items: center;
      border-left: 1px solid #eee;
      &:hover {
        background-color: $icon-background-color;
      }
    }
  }
</style>
