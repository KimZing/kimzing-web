<template>
  <div>
    <RichEditor
      v-model="htmlContent"
      :uploadUrl="uploadUrl"
      :headers="{ Authorization: token }"
    ></RichEditor>
    <div v-html="htmlContent" class="inner-html"></div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue'
  import RichEditor from '@/components/rich-editor/index.vue'
  import { useTypeStore } from '@/store'

  const store = useTypeStore()
  const { token } = store.state.user
  const uploadUrl = 'http://localhost:8080/api/upload'

  const htmlContent = ref<string>(
    '<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="Logo" src="./favicon.ico" alt="Logo" width="100" height="100" /><ul><li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li></ul>'
  )
</script>

<style lang="scss" scoped>
  .inner-html {
    margin-top: 20px;
    padding: 10px;
    background-color: #fff;
  }
</style>
