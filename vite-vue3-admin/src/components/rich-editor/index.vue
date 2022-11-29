<template>
  <div style="position: relative">
    <el-upload
      :action="uploadUrl"
      :headers="headers"
      :show-file-list="false"
      style="position: absolute; right: 6px; top: 4px; z-index: 100000000"
      :on-success="onSuccess"
    >
      <el-button icon="el-icon-upload" size="small" type="primary">上传</el-button>
    </el-upload>
    <textarea :id="tinymceId" style="width: 100%"></textarea>
  </div>
</template>

<script lang="ts" setup>
  import { onActivated, onDeactivated, onMounted, onUnmounted, ref, unref } from 'vue'
  import type { RawEditorSettings } from 'tinymce'
  import tinymce from 'tinymce/tinymce'
  import { buildShortUUID } from '@/utils/uuid'
  import tinymcProps from './props'
  import 'tinymce/themes/silver'
  import 'tinymce/icons/default/icons'
  import 'tinymce/plugins/advlist'
  import 'tinymce/plugins/anchor'
  import 'tinymce/plugins/autolink'
  import 'tinymce/plugins/autosave'
  import 'tinymce/plugins/code'
  import 'tinymce/plugins/codesample'
  import 'tinymce/plugins/directionality'
  import 'tinymce/plugins/fullscreen'
  import 'tinymce/plugins/hr'
  import 'tinymce/plugins/insertdatetime'
  import 'tinymce/plugins/link'
  import 'tinymce/plugins/lists'
  import 'tinymce/plugins/media'
  import 'tinymce/plugins/nonbreaking'
  import 'tinymce/plugins/noneditable'
  import 'tinymce/plugins/pagebreak'
  import 'tinymce/plugins/paste'
  import 'tinymce/plugins/preview'
  import 'tinymce/plugins/print'
  import 'tinymce/plugins/save'
  import 'tinymce/plugins/searchreplace'
  import 'tinymce/plugins/spellchecker'
  import 'tinymce/plugins/tabfocus'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/template'
  import 'tinymce/plugins/textpattern'
  import 'tinymce/plugins/visualblocks'
  import 'tinymce/plugins/visualchars'
  import 'tinymce/plugins/wordcount'
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/imagetools'

  const props = defineProps(tinymcProps)
  const tinymceId = ref(buildShortUUID('tinymce'))
  const editorRef = ref()
  const emit = defineEmits(['update:modelValue'])

  const onSuccess = (response: any) => {
    const content = `${props.modelValue}<img src="${response.data}"/>`
    editorRef.value.setContent(content)
    emit('update:modelValue', content)
  }

  const initOptions: RawEditorSettings = {
    selector: `#${tinymceId.value}`,
    height: props.height,
    width: props.width,
    toolbar: props.toolbar,
    menubar: props.menu,
    plugins: props.plugins,
    language: props.language,
    skin: props.skin,
    skin_url: `/tinymce/skins/ui/${props.skin}`,
    language_url: `/tinymce/langs/${props.language}.js`,
    branding: false,
    default_link_target: '_blank',
    link_title: false,
    object_resizing: false,
    auto_focus: true,
    content_css: '/tinymce/skins/ui/oxide/content.min.css',
    ...props.options,
    setup: (editor) => {
      editorRef.value = editor
      editor.on('init', (e) => {
        const value = props.modelValue
        editor.setContent(value)
        editor.on('change keyup undo redo', () => {
          const content = editor.getContent()
          emit('update:modelValue', content)
        })
      })
    }
  }

  const initEditor = () => {
    tinymce.init(initOptions)
  }
  const destory = () => {
    if (tinymce !== null) {
      tinymce?.remove?.(unref(editorRef))
    }
  }

  // 不能直接进行init, 要在生命周期内,同样要销毁
  onMounted(() => initEditor())
  onActivated(() => initEditor())
  onUnmounted(() => destory())
  onDeactivated(() => destory())
</script>
