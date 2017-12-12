window.onload = function() {
  var bstart = document.getElementById('button-start')

  bstart.onclick = function() {
    // setBoxNumber('box', 29)
    setBox('box-content', 8, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  }
}

function setBoxNumber(id, n) {
  var box = document.getElementById(id)
  var value = -1 * n * getComputedStyle(box).height.slice(0, -2)
  box.children[0].style.transform = 'matrix(1,0,0,1,60,' + value + ')'
}

function setBox(id, duration, contentArray, targetIndex, bazier) {
  var box = document.getElementById(id)
  if (!box) {
    return console.error('box %s not found!', id)
  }
  bazier = bazier || '0.33, 0.07, 0, 1.01'
  box.style.transition =
    'transform ' + duration + 's cubic-bezier(' + bazier + ') 0s'

  var string = ''
  var repeat = 3
  do {
    string += contentArray.join('')
  } while (repeat--)
  string += contentArray.slice(0, targetIndex + 1).join('')
  box.innerHTML = string

  var boxWrapper = box.parentNode
  var y =
    -1 * (string.length - 1) * getComputedStyle(boxWrapper).height.slice(0, -2)
  var x = getComputedStyle(boxWrapper).width.slice(0, -2) / 4
  console.log(x, y)
  box.style.transform = 'matrix(1,0,0,1,' + x + ',' + y + ')'
}
