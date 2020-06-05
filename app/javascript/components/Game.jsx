// let monkPosition = [1, 7]
// let observer = null
//
// function emitChange() {
//   observer(monkPosition)
// }
//
// export function observe(o) {
//   if (observer) {
//     throw new Error('Multiple observers not implemented.')
//   }
//
//   observer = o
//   emitChange()
// }
//
// export function moveMonk(toX, toY) {
//   monkPosition = [toX, toY]
//   emitChange()
// }
//
// export function canMoveMonk(toX, toY) {
//   const [x, y] = monkPosition
//   const dx = toX - x
//   const dy = toY - y
//
//   return (
//     (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
//     (Math.abs(dx) === 1 && Math.abs(dy) === 2)
//   )
// }
