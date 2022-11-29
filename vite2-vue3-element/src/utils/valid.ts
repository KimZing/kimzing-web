type ValidType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'method'
  | 'regexp'
  | 'integer'
  | 'float'
  | 'array'
  | 'object'
  | 'enum'
  | 'date'
  | 'url'
  | 'hex'
  | 'email'
  | 'any'

type triggerType = 'change' | 'blur' | string[]

export const valids = {
  required: (name?: string) => ({
    required: true,
    message: `${name || '属性'}不能为空`,
    trigger: ['change', 'blur'] as triggerType
  }),
  type: (type: ValidType) => ({
    type,
    message: '类型错误',
    trigger: ['change', 'blur'] as triggerType
  }),
  length: (min: number, max: number) => ({
    min,
    max,
    message: `长度${min}-${max}`,
    trigger: ['change', 'blur'] as triggerType
  }),
  size: (min: number, max: number) => ({
    type: 'number',
    min,
    max,
    message: `范围错误,${min}-${max}`,
    trigger: ['change', 'blur'] as triggerType
  }),
  chinese: () => ({
    validator: (rule: any, value: any, callback: any) => {
      // 校验中文的正则：/^[\u4e00-\u9fa5]{0,}$/
      if (/^[\u4e00-\u9fa5]{0,}$/.test(value) === false) {
        callback(new Error())
      } else {
        // 校验通过
        callback()
      }
    },
    message: '请输入中文',
    trigger: ['change', 'blur'] as triggerType
  }),
  phone: () => ({
    validator: (rule: any, value: any, callback: any) => {
      if (/^1[34578]\d{9}$/.test(value) === false) {
        callback(new Error())
      } else {
        callback()
      }
    },
    message: '请输入正确的手机号',
    trigger: ['change', 'blur'] as triggerType
  }),
  age: () => ({
    validator: (rule: any, value: any, callback: any) => {
      if (/^[0-9]*$/.test(value) === false) {
        callback(new Error())
      } else {
        callback()
      }
    },
    message: '年龄范围错误',
    trigger: ['change', 'blur'] as triggerType
  }),
  upperWithUnderline: () => ({
    validator: (rule: any, value: any, callback: any) => {
      if (/^[A-Z_]*$/.test(value) === false) {
        callback(new Error())
      } else {
        callback()
      }
    },
    message: '只能包含大写字母和下划线',
    trigger: ['change', 'blur'] as triggerType
  }),
  path: () => ({
    validator: (rule: any, value: any, callback: any) => {
      if (!value || !value.startsWith('/')) {
        callback(new Error())
      } else {
        callback()
      }
    },
    message: '路径错误',
    trigger: ['change', 'blur'] as triggerType
  })
}
