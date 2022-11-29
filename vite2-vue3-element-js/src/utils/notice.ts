import { ElNotification } from 'element-plus'

/* 通知窗口 */
const notice = (
  title: string,
  message: string = '',
  type: 'success' | 'warning' | 'info' | 'error' = 'success',
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right'
) => {
  ElNotification({
    title,
    message,
    type,
    position,
    duration: 3000
  })
}

export default notice
