import type { BaseFormProps } from '@/components/base-form/types/props'
import type { Book } from '@/model/book'

export const getExpendFormProp = (item: Book): BaseFormProps => {
  return {
    disabled: true,
    hideRequiredAsterisk: true,
    labelPosition: 'right',
    labelWidth: 100,
    inline: true,
    schemas: [
      {
        prop: 'authorName',
        label: '姓名:',
        type: 'Span',
        span: 6,
        options: {
          value: item.authorName
        }
      },
      {
        prop: 'authorEmail',
        label: '邮箱:',
        type: 'Span',
        span: 6,
        options: {
          value: item.authorEmail
        }
      },
      {
        prop: 'authorPhone',
        label: '手机号:',
        type: 'Span',
        span: 6,
        options: {
          value: item.authorPhone
        }
      },
      {
        prop: 'authorAddress',
        label: '地址:',
        type: 'Span',
        span: 6,
        options: {
          value: item.authorAddress
        }
      }
    ],
    operation: {
      showOperation: false
    }
  }
}
