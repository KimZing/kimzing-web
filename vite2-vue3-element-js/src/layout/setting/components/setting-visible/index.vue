<template>
  <div class="container-setting-visible full">
    <SpaceItem v-for="item in visibles" :title="t(item.title)" :key="item.title">
      <el-switch v-model="item.model" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </SpaceItem>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { SettingMutations } from '@/store/setting/consts'
  import { useTypeStore } from '@/store'
  import { useT } from '@/locals'
  import type { SettingState } from '@/store/setting/state'
  import SpaceItem from '../space-item/index.vue'

  const store = useTypeStore()
  const t = useT()

  const getModel = (name: keyof SettingState['visible']) => {
    return computed({
      get: () => store.state.setting.visible[name],
      set: (visible: boolean) => store.commit(SettingMutations.CHANGE_VISIBLE, { name, visible })
    })
  }

  const visibles = ref([
    { title: 'setting.visible.logo', model: getModel('logo') },
    { title: 'setting.visible.navibar', model: getModel('navibar') },
    { title: 'setting.visible.sidebar', model: getModel('sidebar') }
  ])
</script>

<style lang="scss" scoped>
  .container-setting-visible {
    display: flex;
    flex-direction: column;
  }
</style>
