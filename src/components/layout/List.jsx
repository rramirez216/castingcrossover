import React from 'react'
import Item from './Item'

function List({ list, total }) {
  if (list) {
    return (
      <div>
        {typeof total === 'string' ? (
          <div>
            <p>On-Screen Encounters: 0</p>
            <p>{total}</p>
          </div>
        ) : (
          <p>On-Screen Encounters: {total}</p>
        )}
        {list.map((obj, index) => (
          <Item item={obj} key={index} />
        ))}
      </div>
    )
  }

  return <div>loading...</div>
}

export default List
