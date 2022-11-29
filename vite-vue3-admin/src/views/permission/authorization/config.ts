import { getAllAPI } from '@/apis/api'
import { TransferOptions, TreeOptions } from '@/components/base-form/types/options'
import { API } from '@/model/api'
import { getPermissionTree } from '../role/helper'

export const permissionOptions: TreeOptions = {
  nodeKey: 'key',
  highlightCurrent: true,
  props: { label: 'title', children: 'children' },
  data: getPermissionTree()
}

export const apiOptions: TransferOptions = {
  titles: ['未授权', '已授权'],
  buttonTexts: ['移除', '添加'],
  data: [],
  props: { key: 'path', label: 'remark' },
  filterable: true,
  filterMethod: (query: string, item: API) => {
    return item.path.indexOf(query) > -1 || item.remark.indexOf(query) > -1
  },
  filterPlaceholder: '请输入关键词'
}

getAllAPI().then((data) => {
  apiOptions.data = data
})
