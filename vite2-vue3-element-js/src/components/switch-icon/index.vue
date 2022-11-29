<template>
  <div class="container-switch-icon">
    <el-tooltip
      effect="dark"
      :content="props.status ? t('layout.header.tip.openMenu') : t('layout.header.tip.closeMenu')"
      placement="bottom"
    >
      <div class="switch-icon flex-center">
        <i class="iconfont icon-shouqi icon-item" v-show="!props.status" @click="onClick" />
        <i class="iconfont icon-zhankai icon-item" v-show="props.status" @click="onClick" />
      </div>
    </el-tooltip>
  </div>
</template>
<script setup lang="ts">
  import { useT } from '@/locals'

  const t = useT()

  const props = defineProps({
    // 状态，true：开启，false: 关闭
    status: Boolean
  })

  const emit = defineEmits(['changeStatus'])

  const onClick = () => {
    emit('changeStatus')
  }
</script>
<style lang="scss" scoped>
  .container-switch-icon {
    .switch-icon {
      height: 100%;
      .icon-item {
        font-size: 20px;
      }
    }
  }
</style>
