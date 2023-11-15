import React from 'react'
import Item from './Item'

function List({ list, total }) {
  if (list) {
    return (
      <div>
        {typeof total === 'string' ? (
          <p>{total}</p>
        ) : (
          <p>On-Screen Encounters: {total}</p>
        )}
        {list.map((element, index) => (
          <Item item={element} key={index} />
        ))}
      </div>
    )
  }

  return <div>loading...</div>
}

export default List
