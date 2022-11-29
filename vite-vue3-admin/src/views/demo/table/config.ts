import { reactive } from 'vue'
import { createUpdateBook, getBookPage } from '@/apis/book'
import { BaseTableProp } from '@/components/base-table/types/types'
import { searchProp } from './props/search'
import { createProp } from './props/create'
import { updateProp } from './props/update'
import { tableProp } from './props/table'

const bookTableProp = reactive<BaseTableProp>({
  createWidth: 600,
  createProp,
  updateWidth: 600,
  updateProp,
  searchProp,
  tableProp,
  methods: {
    create: createUpdateBook,
    read: getBookPage,
    update: createUpdateBook
  }
})

export default bookTableProp
