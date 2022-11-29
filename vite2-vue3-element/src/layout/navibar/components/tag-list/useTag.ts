import { computed } from 'vue'
import router from '@/router'
import { Tag } from '@/store/layout/state'
import store from '@/store'
import { deepCopy } from '@/utils/copy'
import { LayoutMutations } from '@/store/layout/consts'

export const useTag = () => {
  const tags = computed(() => store.state.layout.tags)
  return {
    tags,
    // 点击标签
    clickTag: (tag: Tag) => {
      const newTags = deepCopy(tags.value)
      // 取消当前激活的标签
      const currentTag = newTags.filter((t) => t.active)[0]
      if (currentTag) {
        currentTag.active = false
      }
      // 激活当前点击的标签
      newTags.filter((t) => t.title === tag.title)[0].active = true
      store.commit(LayoutMutations.SET_TAGS, newTags)
      // 跳转后会触发route的变更，从而进行addTag操作, 有一定的重复执行代码
      router.push({ name: tag.name, params: tag.params, query: tag.query })
    },
    // 添加标签
    addTag: (tag: Tag) => {
      const newTags = deepCopy(tags.value)
      // 获取当前激活的标签
      const currentTag = newTags.filter((t) => t.active)[0]
      // 如果不存在当前激活tag，则直接添加
      if (!currentTag) {
        newTags.push(tag)
      }
      // 如果与传递的tag不一致，取消激活标签
      if (currentTag && currentTag.title !== tag.title) {
        // 不一致时，取消当前的激活标签
        currentTag.active = false
      }

      // 如果传递的tag已经存在，则直接激活标签并返回
      const existTag = newTags.filter((t) => t.title === tag.title)
      if (existTag && existTag.length > 0) {
        // 理论上只会同时存在一个
        existTag[0].active = true
      } else {
        // 没有则直接push
        newTags.push(tag)
      }

      store.commit(LayoutMutations.SET_TAGS, newTags)
    },

    // 关闭标签
    closeTag: (tag: Tag) => {
      const newTags = deepCopy(tags.value)
      // 获取要移除的标签的index位置
      const index = newTags.indexOf(newTags.filter((t) => t.title === tag.title)[0])
      // 移除该标签
      newTags.splice(index, 1)

      if (tag.active) {
        // 如果移除的是激活的标签页，则激活其左侧标签
        const leftTag = newTags[index - 1]
        leftTag.active = true
        // 跳转到标签对应的左侧标签
        router.push({ name: leftTag.name, params: leftTag.params, query: leftTag.query })
      }
      store.commit(LayoutMutations.SET_TAGS, newTags)
    },
    // 关闭左侧标签
    closeLeftTag: () => {
      const newTags = deepCopy(tags.value)
      // 获取当前激活标签
      const currentTag = newTags.filter((t) => t.active)[0]
      // 获取要当前标签的index位置
      const index = newTags.indexOf(newTags.filter((t) => t.title === currentTag.title)[0])
      for (let i = newTags.length - 1; i >= 0; i -= 1) {
        const tag = newTags[i]
        if (i < index && tag.closable) {
          newTags.splice(i, 1)
        }
      }
      store.commit(LayoutMutations.SET_TAGS, newTags)
    },
    // 关闭右侧标签
    closeRightTag: () => {
      const newTags = deepCopy(tags.value)
      // 获取当前激活标签
      const currentTag = newTags.filter((t) => t.active)[0]
      // 获取要当前标签的index位置
      const index = newTags.indexOf(newTags.filter((t) => t.title === currentTag.title)[0])
      for (let i = newTags.length - 1; i >= 0; i -= 1) {
        const tag = newTags[i]
        if (i > index && tag.closable) {
          newTags.splice(i, 1)
        }
      }
      store.commit(LayoutMutations.SET_TAGS, newTags)
    },
    // 关闭其他标签
    closeOtherTag: () => {
      const newTags = deepCopy(tags.value).filter((n) => n.active || !n.closable)
      store.commit(LayoutMutations.SET_TAGS, newTags)
    },
    // 关闭所有tag
    closeAll: () => {
      const newTags = deepCopy(tags.value).filter((n) => !n.closable)
      store.commit(LayoutMutations.SET_TAGS, newTags)
      // 模拟点击标签
      if (newTags && newTags.length > 0) {
        const tag = newTags[0]
        // 取消当前激活的标签
        const currentTag = newTags.filter((t) => t.active)[0]
        if (currentTag) {
          currentTag.active = false
        }
        // 激活当前点击的标签
        newTags.filter((t) => t.title === tag.title)[0].active = true
        store.commit(LayoutMutations.SET_TAGS, newTags)
        // 跳转后会触发route的变更，从而进行addTag操作, 有一定的重复执行代码
        router.push({ name: tag.name, params: tag.params, query: tag.query })
      }
    }
  }
}
