;(function() {
  // 默认的贝塞尔曲线
  var _defaultBazier = '0.33, 0.07, 0, 1.01'
  var _defalutDuration = 8
  var _defalutRepeatTimes = 4

  return (window.luckyscroll = {
    scroll: function(id, contentArray, targetIndex, duration, bazier, repeat) {
      // 设置 box transition
      var box = document.getElementById(id)
      if (!box) {
        return console.error('box %s not found!', id)
      }
      box.style.transition =
        'transform ' +
        (duration || _defalutDuration) +
        's cubic-bezier(' +
        (bazier || _defaultBazier) +
        ') 0s'

      // 设置 box 文本内容
      var text = ''
      repeat = repeat || _defalutRepeatTimes
      do {
        text += contentArray.join('')
      } while (repeat--)
      text += contentArray.slice(0, targetIndex + 1).join('')
      box.innerHTML = text

      // 设置 tranform
      var boxWrapper = box.parentNode
      var y =
        -1 *
        (text.length - 1) *
        getComputedStyle(boxWrapper).height.slice(0, -2)
      var x = getComputedStyle(boxWrapper).width.slice(0, -2) / 4
      box.style.transform = 'matrix(1,0,0,1,' + x + ',' + y + ')'
    }
  })
})()
