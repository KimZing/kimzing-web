/* 通知消息 */
import { notification } from 'ant-design-vue'
import { NotificationPlacement } from 'ant-design-vue/lib/notification'

const notice = {
  info: (message: string, description?: string, duration = 4, placement: NotificationPlacement = 'topRight' ) => {
    notification.info({ message, description, duration, placement })
  },
  success: (message: string, description?: string, duration = 4, placement: NotificationPlacement = 'topRight' ) => {
    notification.success({ message, description, duration, placement })
  },
  warn: (message: string, description?: string, duration = 4, placement: NotificationPlacement = 'topRight' ) => {
    notification.warn({ message, description, duration, placement })
  },
  error: (message: string, description?: string, duration = 4, placement: NotificationPlacement = 'topRight' ) => {
    notification.error({ message, description, duration, placement })
  }
}
export default notice
