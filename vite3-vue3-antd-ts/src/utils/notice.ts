/* 通知消息 */
import { notification } from 'ant-design-vue'
import { NotificationPlacement } from 'ant-design-vue/lib/notification'
import { VueNode } from 'ant-design-vue/lib/_util/type'

const notice = {
  info: (message: VueNode, description?: VueNode, duration = 4, placement: NotificationPlacement = 'topRight') => {
    notification.info({ message, description, duration, placement })
    // notification.info({ message, description, duration, placement } as NotificationArgsProps)
  },
  success: (message: VueNode, description?: VueNode, duration = 4, placement: NotificationPlacement = 'topRight') => {
    notification.success({ message, description, duration, placement })
  },
  warn: (message: VueNode, description?: VueNode, duration = 4, placement: NotificationPlacement = 'topRight') => {
    notification.warn({ message, description, duration, placement })
  },
  error: (message: VueNode, description?: VueNode, duration = 4, placement: NotificationPlacement = 'topRight') => {
    notification.error({ message, description, duration, placement })
  }
}

export default notice
