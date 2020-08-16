var FL = {}

FL.container = document.getElementById('container')

FL.callbackQueue = []

FL.sentences = []

FL.callback = function (method) {
  FL.callbackQueue.push(method)
  FL.runCallbackQueue()
}

FL.runCallbackQueue = function () {
  if (FL.callbackQueue.length === 0) {
    return
  }

  setTimeout(() => {
    window.location.href = 'FL-callback://'
  }, 0)
}

FL.getCommandQueue = function () {
  var commands = JSON.stringify(FL.callbackQueue)
  FL.callbackQueue = []
  return commands
}

FL.insertSentence = function (content) {
  FL.sentences = content
  var innerHTML = ''
  FL.sentences.forEach((sentence, index) => {
    var lrc_container = document.createElement('div')
    var en = document.createElement('p')
    var cn = document.createElement('p')
    en.innerHTML = sentence.en || ''
    cn.innerHTML = sentence.cn || ''
    en.id = `sentence_en_${index}`
    cn.id = `sentence_cn_${index}`
    en.classList.add('en')
    cn.classList.add('cn')
    lrc_container.classList.add('lrc-container')

    en.setAttribute('onclick', `javascript:FL.callback('sentenceSelected:${index}')`)
    cn.setAttribute('onclick', `javascript:FL.callback('sentenceSelected:${index}')`)
    lrc_container.innerHTML = en.outerHTML + cn.outerHTML

    innerHTML = innerHTML + lrc_container.outerHTML
  })

  FL.container.innerHTML = innerHTML
  FL.callback('insertSentence')
}
FL.insertSentence()

FL.insertHTML = function (html) {
  document.execCommand('insertHTML', false, html)
}

FL.scrollAtIndex = function (index) {
  const elementEn = document.getElementById(`sentence_en_${index}`)
  const elementCn = document.getElementById(`sentence_cn_${index}`)
  let rectEn = elementEn.getBoundingClientRect()
  let rectCn = elementCn.getBoundingClientRect()
  if (rectEn.top > window.innerHeight || rectEn.bottom < 0 || rectCn.bottom > window.innerHeight || rectCn.top < 0) {
    // elementEn.scrollIntoView({
    //   behavior: "smooth"
    // });
    $('html, body').animate({ scrollTop: $([elementEn]).position().top }, 1000)
  }
}

FL.highlightIndex = function (index) {
  const highlights = document.getElementsByClassName('highlight')
  console.log('highlights', highlights.length)

  while (highlights.length > 0) {
    highlights[0].classList.remove('highlight')
  }

  const elementEn = document.getElementById(`sentence_en_${index}`)
  const elementCn = document.getElementById(`sentence_cn_${index}`)
  elementEn.classList.add('highlight')
  elementCn.classList.add('highlight')
}

FL.setSubTitleType = function (subTitleType) {
  const cns = document.getElementsByClassName('cn')
  const ens = document.getElementsByClassName('en')
  if (cns.length > 0 && ens.length > 0) {
    if (subTitleType === 0) {
      ;[].forEach.call(ens, (el) => {
        el.classList.add('hidden')
      })
      ;[].forEach.call(cns, (el) => {
        el.classList.add('hidden')
      })
    } else if (subTitleType === 1) {
      ;[].forEach.call(ens, (el) => {
        el.classList.remove('hidden')
      })
      ;[].forEach.call(cns, (el) => {
        el.classList.remove('hidden')
      })
    } else if (subTitleType === 2) {
      ;[].forEach.call(ens, (el) => {
        el.classList.remove('hidden')
      })
      ;[].forEach.call(cns, (el) => {
        el.classList.add('hidden')
      })
    } else if (subTitleType === 3) {
      ;[].forEach.call(ens, (el) => {
        el.classList.add('hidden')
      })
      ;[].forEach.call(cns, (el) => {
        el.classList.remove('hidden')
      })
    }
  }
}

FL.emptySentence = function () {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      // Chrome
      window.getSelection().empty()
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges()
    }
  }
}

FL.emptySelection = function () {
  var selection = window.getSelection ? window.getSelection() : document.selection ? document.selection : null
  if (!!selection) selection.empty ? selection.empty() : selection.removeAllRanges()
}

FL.setFontSize = function (type) {
  const container = document.getElementById('container')
  if (type === 0) {
    container.classList.remove('font-normal')
    container.classList.remove('font-large')
    container.classList.add('font-small')
  } else if (type === 1) {
    container.classList.add('font-normal')
    container.classList.remove('font-large')
    container.classList.remove('font-small')
  } else if (type === 2) {
    container.classList.remove('font-normal')
    container.classList.add('font-large')
    container.classList.remove('font-small')
  }
}

// bind selection change event to my function
document.onselectionchange = userSelectionChanged
var selectionEndTimeout = null
function userSelectionChanged() {
  // wait 500 ms after the last selection change event
  if (selectionEndTimeout) {
    clearTimeout(selectionEndTimeout)
  }

  selectionEndTimeout = setTimeout(function () {
    $(window).trigger('selectionEnd')
  }, 500)
}

function getSelectionText() {
  var text = ''
  if (window.getSelection) {
    text = window.getSelection().toString()
  } else if (document.selection && document.selection.type != 'Control') {
    text = document.selection.createRange().text
  }
  return text
}

$(window).bind('selectionEnd', function () {
  // reset selection timeout
  selectionEndTimeout = null

  // get user selection
  var selection = getSelectionText()
  console.log(selection)

  // if the selection is not empty show it :)
  FL.callback(`contentSelected:${selection}`)
})

let indexS = 0
FL.highlightIndex(indexS)
document.getElementById('nextS').addEventListener('click', function () {
  indexS++
  FL.highlightIndex(indexS)
  FL.scrollAtIndex(indexS)
})
