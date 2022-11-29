// 引入依赖
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
import notice from './notice'

// 导出excel  id为table的id
export const exportExcel = (id: string, title: string = 'data') => {
  // 导出的内容只做解析，不进行格式转换
  const xlsxParam = { raw: true }

  //  判断要导出的节点中是否有fixed的表格，如果有，转换excel时先将该dom移除，然后append回去，
  const fix = document.querySelector('.el-table__fixed')
  let wb
  if (fix) {
    wb = XLSX.utils.table_to_book(document.getElementById(id)?.removeChild(fix), xlsxParam)
    document.getElementById(id)?.appendChild(fix)
  } else {
    wb = XLSX.utils.table_to_book(document.getElementById(id), xlsxParam)
  }

  // 网上wb = XLSX.utils.table_to_book(document.querySelector('#'+id));直接这样写，如果存在固定列，导出的excel表格会重复两遍

  const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
  try {
    FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), `${title}.xlsx`)
  } catch (e) {
    notice('导出失败', e, 'error')
  }
}
