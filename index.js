window.onload = function() {
  setBoxNumber('box-1', 9)
}

function setBoxNumber(id, n) {
  var box = document.getElementById(id)
  var value = -1 * n * getComputedStyle(box).height.slice(0, -2)
  box.children[0].style.transform = 'matrix(1,0,0,1,0,' + value + ')'
}
