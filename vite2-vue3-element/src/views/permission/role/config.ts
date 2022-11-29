import { reactive } from 'vue'
import { createUpdateRole, deleteRole, getRolePage } from '@/apis/role'
import { BaseTableProp } from '@/components/base-table/types/types'
import { searchProp } from './props/search'
import { tableProp } from './props/table'
import { createProp } from './props/create'
import { updateProp } from './props/update'
import { Role } from '@/model/permission'
import { convertTreeOfStateToRoleStruct } from './helper'

const roleTableProp: BaseTableProp = reactive({
  searchProp,
  createWidth: 600,
  createProp,
  updateWidth: 600,
  updateProp,
  tableProp,
  methods: {
    create: (state: any) => {
      const role: Role = convertTreeOfStateToRoleStruct(state)
      return createUpdateRole(role)
    },
    delete: deleteRole,
    update: (state: any) => {
      const role: Role = convertTreeOfStateToRoleStruct(state)
      return createUpdateRole(role)
    },
    read: getRolePage
  }
})

export default roleTableProp
