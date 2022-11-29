import { reactive } from 'vue'
import { BaseTableProp } from '@/components/base-table/types/types'
import { searchProp } from './props/search'
import { tableProp } from './props/table'
import { createProp } from './props/create'
import { updateProp } from './props/update'
import { createUpdateAPI, getAPIPage, deleteAPI } from '@/apis/api'

const apiTableProp: BaseTableProp = reactive({
  searchProp,
  createWidth: 600,
  createProp,
  updateWidth: 600,
  updateProp,
  tableProp,
  methods: {
    create: createUpdateAPI,
    read: getAPIPage,
    update: createUpdateAPI,
    delete: deleteAPI
  }
})

export default apiTableProp
