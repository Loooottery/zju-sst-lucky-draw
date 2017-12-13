window.onload = function() {
  var setting = {
    'box-4': {
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: 0
    },
    'box-5': {
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: 0
    },
    'box-6': {
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: 1
    },
    'box-7': {
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: 2
    },
    'box-8': {
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: 8
    }
  }
  document.getElementById('boxes').addEventListener('click', function(event) {
    var boxId = event.target.getAttribute('box')
    var noScroll = event.target.getAttribute('noscroll')
    if (!boxId || noScroll !== null) {
      return
    }
    var id = 'box-' + boxId
    luckyscroll.scroll(id, setting[id].range, setting[id].result)
  })
}
