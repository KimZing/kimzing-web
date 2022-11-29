<template>
  <div class="container-setting-size full">
    <SpaceItem :title="t('setting.size.element.title')">
      <el-select
        class="size-select"
        v-model="elementSize"
        size="mini"
        @change="changeSize"
        :placeholder="t('setting.size.element.placeholder')"
      >
        <el-option :label="t('setting.size.element.select.medium')" value="medium"> </el-option>
        <el-option :label="t('setting.size.element.select.small')" value="small"> </el-option>
        <el-option :label="t('setting.size.element.select.mini')" value="mini"> </el-option>
      </el-select>
    </SpaceItem>
    <SpaceItem :title="t('setting.size.sidebarWidth')">
      <el-input-number
        v-model="sidebarWidth"
        controls-position="right"
        :step="5"
        :min="230"
        :max="800"
        label="123"
      ></el-input-number>
    </SpaceItem>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { useT } from '@/locals'
  import { useTypeStore } from '@/store'
  import { SettingMutations } from '@/store/setting/consts'
  import type { SettingState } from '@/store/setting/state'
  import SpaceItem from '../space-item/index.vue'

  const store = useTypeStore()
  const t = useT()

  const getModel = (name: keyof SettingState['size']) => {
    return computed<any>({
      get: () => store.state.setting.size[name],
      set: (size: string) => {
        store.commit(SettingMutations.CHANGE_SIZE, { name, size })
      }
    })
  }

  // 设置Element元素大小
  const elementSize = getModel('element')
  const changeSize = () => window.location.reload()
  // 设置sidebar宽度
  const sidebarWidth = getModel('sidebarWidth')
</script>

<style lang="scss" scoped>
  .container-setting-size {
    display: flex;
    flex-direction: column;
    .size-select {
      width: 150px;
    }
  }
</style>
