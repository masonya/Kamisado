let monkPosition = [1, 7]
let observers = []
function emitChange() {
  observers.forEach(o => o && o(monkPosition))
}
export function observe(o) {
  observers.push(o)
  emitChange()
  return () => {
    observers = observers.filter(t => t !== o)
  }
}
export function canMoveMonk(toX, toY) {
  const [x, y] = monkPosition
  const dx = toX - x
  const dy = toY - y
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}
export function moveMonk(toX, toY) {
  monkPosition = [toX, toY]
  emitChange()
}
