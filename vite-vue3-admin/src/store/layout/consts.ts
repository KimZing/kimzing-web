enum LayoutActions {}

enum LayoutMutations {
  CHANGE_MENU_COLLAPSE = 'layout/changeMenuCollapse',
  CHANGE_SETTING_VISIBLE = 'layout/changSettingVisible',
  CHANGE_LOCK_DIALOG_VISIBLE = 'layout/changLockDialogVisible',
  CHANGE_PASSWORD_DIALOG_VISIBLE = 'layout/changPasswordDialogVisible',
  LOCK = 'layout/lock',
  UNLOCK = 'layout/unlock',
  SET_TAGS = 'layout/setTags'
}

export { LayoutActions, LayoutMutations }
