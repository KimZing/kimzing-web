<template>
  <div class="container-authorization full">
    <div class="permission-tree">
      <div class="permission-title">菜单/功能</div>
      <KimTree v-bind="permissionOptions" @node-click="handleNodeClick"></KimTree>
    </div>
    <div class="api-list">
      <KimTransfer v-model="state.selectedAPI" v-bind="apiOptions">
        <template #right-footer>
          <div class="flex-center-full">
            <el-button type="primary" @click="handleSave">保存</el-button>
          </div>
        </template>
      </KimTransfer>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  import KimTree from '@/components/base-form/components/kim-tree.vue'
  import { apiOptions, permissionOptions } from './config'
  import notice from '@/utils/notice'
  import { getAPIOfMenuOrFeature, saveMenuOrFeatureToAPI } from '@/apis/permission'
  import KimTransfer from '@/components/base-form/components/kim-transfer.vue'

  const state = reactive({
    // 当前选中的api列表
    selectedAPI: [] as string[],
    // 当前选中的菜单/功能
    permissionKey: '',
    permissionType: ''
  })

  // 设置当前点击的菜单/功能信息
  const handleNodeClick = async (data: { key: string; type: 'menu' | 'feature' }) => {
    // 设置选中信息
    state.permissionKey = data.key
    state.permissionType = data.type
    // 清除选中的api
    state.selectedAPI = []

    // 获取选中权限的对应api列表
    const apis = await getAPIOfMenuOrFeature({ key: data.key, type: data.type })
    if (!apis || apis.length === 0) {
      return
    }
    state.selectedAPI = apiOptions.data.filter((a) => apis.indexOf(a.id) > -1).map((a) => a.path)
  }

  // 保存菜单、功能与api的关系
  const handleSave = () => {
    if (!state.permissionKey || !state.permissionType) {
      notice('请选择菜单或功能', '', 'error')
      return
    }
    const request = {
      permission: { key: state.permissionKey, type: state.permissionType },
      api: apiOptions.data.filter((a) => state.selectedAPI.indexOf(a.path) > -1).map((a) => a.id)
    }
    saveMenuOrFeatureToAPI(request)
      .then(() => {
        notice('保存成功')
      })
      .catch(() => notice('保存失败'))
  }
</script>

<style lang="scss">
  .container-authorization {
    display: flex;
    background-color: #fff;
    padding: 30px 10px;
    box-sizing: border-box;
    .permission-tree {
      max-height: 100%;
      overflow: auto;
      border: 1px solid #ebeef5;
      border-radius: 4px;
      .el-tree {
        width: 300px;
        box-sizing: border-box;
        background: #fff;
      }
      .permission-title {
        font-size: 16px;
        line-height: 40px;
        padding-left: 5px;
        background: #f5f7fa;
        color: #303133;
        border-bottom: 1px solid #ebeef5;
      }
    }
    .api-list {
      padding: 5px 8px;
      border: 1px solid #ebeef5;
      margin-left: 50px;
      // 设置穿梭框的高度为100%，并且设置高度
      .el-transfer {
        width: 100%;
        height: 100%;
        .el-transfer-panel {
          width: 400px;
          height: 100%;
          .el-transfer-panel__body {
            height: 100%;
            .el-checkbox-group {
              height: 100%;
            }
          }
        }
      }
    }
  }
</style>
