import {createStore} from 'vuex'

// 为了简单使用，此处仅存储需要跨组件共享的变量
const store = createStore({
    state: {
        info: {
            title: 'Web System',
            desc: '此系统主要用作AI语音云平台的前端项目开发，主要关注易用易开发，内部采用了Vue3、VueRouter、VueX、Axios、Sass等技术，你可以有选择的进行使用。'
        }
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})

export default store