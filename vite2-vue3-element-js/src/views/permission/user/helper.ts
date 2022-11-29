import { reactive } from 'vue'
import { getAllRoleList } from '@/apis/role'
import { SelectOption } from '@/components/base-form/types/options'

// 获取所有的角色，并转换为Select
export const getAllRoleSelect = () => {
  const options = reactive<SelectOption[]>([])
  getAllRoleList().then((allRole) => {
    options.push(...allRole.map((a) => ({ label: a.name, value: a.id })))
  })
  return options
}
