// shims-vue.d.ts是为了 typescript 做的适配定义文件

// 因为.vue 文件不是一个常规的文件类型，ts 是不能理解 vue 文件是干嘛的，加这一段是是告诉 ts，vue 文件是这种类型的。
// // 比较靠谱的解释: https://stackoverflow.com/questions/54622621/what-does-the-shims-tsx-d-ts-file-do-in-a-vue-typescript-project
declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
