import { reactive } from 'vue'
import { BaseTableProp } from '@/components/base-table/types/types'
import { searchProp } from './props/search'
import { tableProp } from './props/table'
import { createProp } from './props/create'
import { updateProp } from './props/update'
import { createUpdateUser, getUserPage, deleteUser } from '@/apis/user'

const roleTableProp: BaseTableProp = reactive({
  searchProp,
  createWidth: 600,
  createProp,
  updateWidth: 600,
  updateProp,
  tableProp,
  methods: {
    create: createUpdateUser,
    update: createUpdateUser,
    read: getUserPage,
    delete: deleteUser
  }
})

export default roleTableProp
