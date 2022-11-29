// 导入mock数据, 仅在mock模式下运行或打包生效
// 注意：在正式打包时，将mockJs依赖转移到开发依赖
// if (import.meta.env.MODE === 'mock') {
// 1.使用import直接导入
// 加个await 等待mockjs加载完成。如果不等待，当刷新页面时，mock还没完成就请求数据会报404
// await import('@/mock/index')
// 2.使用插件的形式导入，这个时候是同步导入, 就是此处采用的方式
// app.use(mock)
// }
import '@/mock/index'

const mock = (app: any): void => {}

export default mock
