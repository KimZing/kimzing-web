<template>
  <div class="container-setting">
    <el-drawer :title="t('setting.title')" v-model="settingVisible" :size="350" direction="rtl">
      <div class="setting-content full">
        <div>
          <SettingTitle :name="t('setting.visible.title')"></SettingTitle>
          <SettingVisible></SettingVisible>
        </div>
        <div>
          <SettingTitle :name="t('setting.color.title')"></SettingTitle>
          <SettingColor></SettingColor>
        </div>
        <div>
          <SettingTitle :name="t('setting.size.title')"></SettingTitle>
          <SettingSize></SettingSize>
        </div>
        <el-button class="button-reset" type="warning" icon="el-icon-refresh" @click="reset">
          {{ t('setting.reset') }}
        </el-button>
      </div>
    </el-drawer>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { LayoutMutations } from '@/store/layout/consts'
  import { useTypeStore } from '@/store'
  import { SettingMutations } from '@/store/setting/consts'
  import { useT } from '@/locals'
  import SettingTitle from './components/setting-title/index.vue'
  import SettingVisible from './components/setting-visible/index.vue'
  import SettingSize from './components/setting-size/index.vue'
  import SettingColor from './components/setting-color/index.vue'

  const store = useTypeStore()
  const router = useRouter()
  const t = useT()
  // 设置窗口的可视化
  const settingVisible = computed({
    get: () => store.state.layout.settingVisible,
    set: (value) => store.commit(LayoutMutations.CHANGE_SETTING_VISIBLE, value)
  })

  // 重置设置
  const reset = () => {
    store.commit(SettingMutations.RESET_ALL)
  }
</script>

<style lang="scss" scoped>
  .container-setting {
    .setting-content {
      padding: 0 15px;
      color: #000000d9;
      .button-reset {
        width: 100%;
        margin-top: 15px;
      }
    }
  }
</style>
