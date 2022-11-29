<template>
  <BaseTable v-bind="roleTableConfig" @click-update="clickUpdate"> </BaseTable>
</template>
<script setup lang="ts">
  import { Field } from '@/components/base-form/types/props'
  import BaseTable from '@/components/base-table/index.vue'
  import { Role } from '@/model/permission'
  import roleTableConfig from './config'

  const clickUpdate = (schemas: Field[], row: Role) => {
    schemas.forEach((s) => {
      if (s.prop === 'permissions') {
        row.features = row.features ? row.features : []
        row.menus = row.menus ? row.menus : []
        s.defaultValue = [...row.menus, ...row.features]
      }
    })
  }
</script>
