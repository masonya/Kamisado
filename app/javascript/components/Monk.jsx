import React from 'react'
import { ItemTypes } from './ItemTypes'
import { useDrag } from 'react-dnd'

function Monk() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.MONK },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 70,
        fontWeight: 'bold',
        cursor: 'move'
      }}
    >
      ☺
    </div>
  )
}

export default Monk
