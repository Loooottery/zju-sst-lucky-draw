window.onload = function() {
  var bstart = document.getElementById('button-start')

  bstart.onclick = function() {
    luckyscroll.scroll('box-content', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
  }
}
