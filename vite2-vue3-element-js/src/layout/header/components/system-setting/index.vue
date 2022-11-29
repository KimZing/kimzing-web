<template>
  <div class="flex-center">
    <el-tooltip effect="dark" :content="t('layout.header.tip.setting')" placement="bottom">
      <div>
        <i class="el-icon-setting" @click="showNotify"></i>
      </div>
    </el-tooltip>
  </div>
</template>
<script setup lang="ts">
  import { useT } from '@/locals'
  import { useTypeStore } from '@/store'
  import { LayoutMutations } from '@/store/layout/consts'

  const store = useTypeStore()
  const t = useT()

  const showNotify = () => {
    store.commit(LayoutMutations.CHANGE_SETTING_VISIBLE, true)
  }
</script>
