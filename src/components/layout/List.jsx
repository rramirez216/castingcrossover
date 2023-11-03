import React from 'react'
import Item from './Item'

function List({ list }) {
  if (list) {
    return (
      <div>
        {list.map((element, index) => (
          <Item item={element} key={index} />
        ))}
      </div>
    )
  }

  return <div>loading...</div>
}

export default List
