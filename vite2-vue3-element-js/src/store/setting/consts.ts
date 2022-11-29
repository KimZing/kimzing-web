// 之所以多加个前缀，是方便之后的导入
enum SettingMutations {
  RESET = 'setting/reset',
  RESET_ALL = 'setting/resetAll',
  CHANGE_SIZE = 'setting/changeSize',
  CHANGE_VISIBLE = 'setting/changeVisible',
  CHANGE_COLOR = 'setting/changeColor',
  CHANGE_CURRENT_LANGUAGE = 'setting/changeCurrentLanguage'
}

enum SettingActions {}

export { SettingMutations, SettingActions }
