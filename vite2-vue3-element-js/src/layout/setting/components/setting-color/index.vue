<template>
  <div class="container-setting-color full">
    <SpaceItem v-for="item in colors" :title="t(item.title)" :key="item.title">
      <el-color-picker v-model="item.model"></el-color-picker>
    </SpaceItem>
    <el-button class="button-reset" type="warning" icon="el-icon-refresh" @click="reset">
      {{ t('setting.color.reset') }}
    </el-button>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { SettingMutations } from '@/store/setting/consts'
  import { useTypeStore } from '@/store'
  import type { SettingState } from '@/store/setting/state'
  import { useT } from '@/locals'
  import SpaceItem from '../space-item/index.vue'

  const store = useTypeStore()
  const t = useT()

  const getModel = (name: keyof SettingState['color']) => {
    return computed({
      get: () => store.state.setting.color[name],
      set: (color: string) => store.commit(SettingMutations.CHANGE_COLOR, { name, color })
    })
  }

  const colors = ref([
    { title: 'setting.color.menuBackground', model: getModel('menuBackground') },
    { title: 'setting.color.menuText', model: getModel('menuText') },
    { title: 'setting.color.menuActiveText', model: getModel('menuActiveText') },
    { title: 'setting.color.headerBackground', model: getModel('headerBackground') }
  ])

  // 重置颜色
  const reset = () => {
    store.commit(SettingMutations.RESET, ['color'])
  }
</script>

<style lang="scss" scoped>
  .container-setting-color {
    display: flex;
    flex-direction: column;
    .button-reset {
      width: 100%;
      margin: 15px 0;
    }
  }
</style>
