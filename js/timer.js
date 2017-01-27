const elapsedCnt = document.getElementById('elapsed')
const startTime = Date.UTC(2017, 0, 26, 10)

function updateTimer () {
  elapsedCnt.textContent = ((Date.now() - startTime) / (60 * 1000)).toFixed(2)
  setTimeout(updateTimer, 1000)
}
updateTimer()
