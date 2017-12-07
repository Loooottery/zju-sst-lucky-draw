window.onload = function() {
  var bstart = document.getElementById('button-start')

  bstart.onclick = function() {
    var count = 0

    setInterval(function() {
      setBoxNumber('box-1', count)
      count++
      count === 10 && (count = 0)
    }, 800)
  }
}

function setBoxNumber(id, n) {
  var box = document.getElementById(id)
  var value = -1 * n * getComputedStyle(box).height.slice(0, -2)
  box.children[0].style.transform = 'matrix(1,0,0,1,0,' + value + ')'
}
