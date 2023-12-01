import React from 'react'
import Item from './Item'

function List({ list, total }) {
  if (list) {
    return (
      <div className='text-2xl text-center'>
        {typeof total === 'string' ? (
          <div className='mb-16'>
            <p>On-Screen Encounters: 0</p>
            <p>{total}</p>
          </div>
        ) : (
          <p className='font-bold mb-16'>On-Screen Encounters: {total}</p>
        )}
        <div className='flex flex-col items-center gap-8'>
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
