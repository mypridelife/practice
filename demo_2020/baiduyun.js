window.onload = async function () {
  function sleep(wait) {
    return new Promise(resolve => setTimeout(resolve, wait * 1000))
  }
  // 获取url中的参数
  function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg) // 匹配目标参数
    if (r != null) return unescape(r[2])
    return null // 返回参数值
  }

  const 提取码 = '#accessCode'
  const 提取文件 = '#submitBtn > a'

  const 全选 =
    '#shareqr > div.KPDwCE > div.QxJxtg > div > ul.QAfdwP.tvPMvPb > li.fufHyA.yfHIsP > div > span.zbyDdwb'
  const 保存到网盘 =
    'div.module-share-header > div > div.slide-show-right > div > div > div.x-button-box > a.g-button.tools-share-save-hb.g-button-blue > span'
  const 我的资源 =
    '#fileTreeDialog > div.dialog-body > div > ul > li > ul > li:nth-child(5) > div > span > span'
  const 确定 =
    '#fileTreeDialog > div.dialog-footer.g-clearfix > a.g-button.g-button-blue-large'

  function _dom(selector) {
    return document.querySelector(selector)
  }
  function _trigger(selector) {
    const triggerDom = _dom(selector)
    triggerDom.click()
  }
  function _input(selector) {
    const triggerDom = _dom(selector)
    console.log(window.location, getUrlParam('code'))

    triggerDom.value = getUrlParam('code')
  }

  await sleep(1)
  if (_dom(提取码)) {
    _input(提取码)
    await sleep(1)
    _trigger(提取文件)
    await sleep(1)
  }
  if (_dom(全选)) {
    _trigger(全选)
    await sleep(1)
  }
  if (_dom(保存到网盘)) {
    _trigger(保存到网盘)
    await sleep(2)
  }
  if (_dom(我的资源)) {
    _trigger(我的资源)
    await sleep(1)
  }
  if (_dom(确定)) {
    _trigger(确定)
    await sleep(1)
  }
}
