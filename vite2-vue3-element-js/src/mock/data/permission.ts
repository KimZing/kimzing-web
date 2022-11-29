import { features } from '@/router/consts'

export const userPermission = {
  menus: [
    { id: 0, key: '/' },
    { id: 1, key: '/home' },
    { id: 2, key: '/demo' },
    { id: 3, key: '/demo/form' },
    { id: 4, key: '/demo/table' },
    { id: 3, key: '/demo/editor' },
    { id: 5, key: '/demo/echart' },
    { id: 5, key: '/demo/echart/line' },
    { id: 5, key: '/demo/echart/map' },
    { id: 5, key: '/demo/echart/pie' },
    { id: 5, key: '/demo/error' },
    { id: 5, key: '/demo/error/404' },
    { id: 8, key: '/pageout' },
    { id: 9, key: '/pageout/vue' },
    { id: 10, key: '/pageout/vuex' },
    { id: 11, key: '/pageout/vue-router' },
    { id: 12, key: '/pageout/element-plus' },
    { id: 13, key: '/permission' },
    { id: 14, key: '/permission/user' },
    { id: 15, key: '/permission/role' },
    { id: 16, key: '/permission/api' },
    { id: 17, key: '/permission/authorization' },
    { id: 18, key: '/multimenu' },
    { id: 18, key: '/multimenu/menu' },
    { id: 19, key: '/multimenu/menu21' },
    { id: 20, key: '/multimenu/menu22' },
    { id: 21, key: '/multimenu/menu31' },
    { id: 22, key: '/multimenu/menu32' },
    { id: 23, key: '/multimenu/menu41' },
    { id: 24, key: '/multimenu/menu42' }
  ],
  features: [
    { id: 1, key: features.table.create },
    { id: 2, key: features.table.update },
    { id: 3, key: features.table.delete },
    { id: 4, key: features.user.create },
    { id: 5, key: features.user.delete },
    { id: 6, key: features.user.update },
    { id: 7, key: features.user.read }
  ]
}

export const bindApiOfMenuOrFeature = [1, 2, 3, 4, 8]
