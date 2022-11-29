import type { PropType } from 'vue'
import { BaseFormProps } from '../base-form/types/props'
import { Methods, SearchProp, TableProp } from './types/types'

export const baseTableProps = {
  showSearch: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  searchProp: {
    type: Object as PropType<SearchProp>
  },
  showCreate: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  createMode: {
    type: String as PropType<string>,
    default: 'dialog'
  },
  createWidth: {
    type: Number as PropType<number>
  },
  createProp: {
    type: Object as PropType<BaseFormProps>
  },
  showUpdate: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  updateMode: {
    type: String as PropType<string>,
    default: 'dialog'
  },
  updateWidth: {
    type: Number as PropType<number>
  },
  updateProp: {
    type: Object as PropType<BaseFormProps>
  },
  tableProp: {
    type: Object as PropType<TableProp>
  },
  showPage: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  methods: {
    type: Object as PropType<Methods>
  }
}
