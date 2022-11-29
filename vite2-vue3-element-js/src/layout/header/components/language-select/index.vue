<template>
  <div class="flex-center">
    <el-dropdown @command="selectLanguage" trigger="click" style="font-size: 20px">
      <el-tooltip effect="dark" :content="t('layout.header.tip.language')" placement="bottom">
        <div>
          <i
            class="iconfont icon-language"
            :style="{ fontSize: iconStyle.fontSize + 'px', color: iconStyle.color }"
          ></i>
        </div>
      </el-tooltip>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="lang in language.list"
            :command="lang.value"
            :key="lang.value"
            :disabled="language.current === lang.value"
            >{{ lang.label }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import type { PropType } from 'vue'
  import { useTypeStore } from '@/store'
  import { SettingMutations } from '@/store/setting/consts'
  import { useT } from '@/locals'

  const t = useT()
  const store = useTypeStore()
  const language = computed(() => store.state.setting.language)

  defineProps({
    iconStyle: {
      type: Object as PropType<{ fontSize: number; color: string }>,
      default: () => ({
        fontSize: 20,
        color: 'black'
      })
    }
  })

  const selectLanguage = (command: string) => {
    store.commit(SettingMutations.CHANGE_CURRENT_LANGUAGE, command)
  }
</script>
