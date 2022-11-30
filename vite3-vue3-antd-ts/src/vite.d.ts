/// <reference types="vite/client" />

// 对vue文件的ts支持
// 因为.vue 文件不是一个常规的文件类型，ts 是不能理解 vue 文件是干嘛的，加这一段是是告诉 ts，vue 文件是这种类型的。
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}


// 添加env文件的智能提示支持
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
