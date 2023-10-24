function addPoint(event) {
  console.log(event)
  if (event.target.id != 'container') return

  const pointRadius = 20
  const x = event.offsetX
  const y = event.offsetY

  const container = document.getElementById('container')
  const point = document.createElement('div')
  point.classList.add('point')
  point.style.left = (x - pointRadius) + 'px'
  point.style.top = (y - pointRadius) + 'px'

  container.appendChild(point)
}
