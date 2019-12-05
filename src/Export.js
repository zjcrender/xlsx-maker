/* *
 * Created by render on 2019/12/3
 * */
import xlsx from 'better-xlsx'
import {saveAs} from 'file-saver';

const defaultConfig = {
  filename: 'unknow',
  data: [],
  headers: [],
  format: {},
}
const regexp = /[\u4e00-\u9fa5]/

function defaultFormat(row, key) {
  return row[key]
}

function getWidth(input) {
  if (input === null || input === undefined) return 0

  const str = input.toString()
  return regexp.test(str) ? str.length * 2 : str.length
}

function updateColWidth(value, index, cols) {
  const width = getWidth(value)
  cols[index] = Math.max(cols[index], width)
}

export default function json2xlsx(config) {
  const {filename, data, headers, format} = {...defaultConfig, ...config}
  const colWidth = []

  const file = new xlsx.File()
  const sheet = file.addSheet('Sheet1')

  // 添加表头
  const headerRow = sheet.addRow()
  headers.forEach((head, index) => {
    typeof format[head] !== 'function' && (format[head] = defaultFormat)
    colWidth[index] = getWidth(head)

    const hc = headerRow.addCell()
    hc.value = head
  })

  // 添加行
  data.forEach(rowData => {
    const row = sheet.addRow()
    headers.forEach((head, index) => {
      const cell = row.addCell()
      const value = format[head](rowData, head)
      cell.value = value
      updateColWidth(value, index, colWidth)
    })
  })

  // 设置列宽
  colWidth.forEach((width, index) => {
    const col = sheet.col(index)
    col.width = width + 2
  })

  file
    .saveAs('blob')
    .then(function (content) {
      saveAs(content, `${filename}.xlsx`);
    });

}

