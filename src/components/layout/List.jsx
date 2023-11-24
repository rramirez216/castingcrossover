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
        <div className='flex flex-row justify-center'>
          {list.map((obj, index) => (
            <Item item={obj} key={index} />
          ))}
        </div>
      </div>
    )
  }

  return <div></div>
}

export default List
