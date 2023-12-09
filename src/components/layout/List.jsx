import React from 'react'
import Item from './Item'
import { Element } from 'react-scroll'

function List({ list, total }) {
  if (list) {
    return (
      <Element className='text-2xl text-center' name='list'>
        {typeof total === 'string' ? (
          <div className='mb-16'>
            <p>On-Screen Encounters: 0</p>
            <p>{total}</p>
          </div>
        ) : (
          <p className='text-3xl mb-16'>
            <span className='font-bold'>{total}</span> On-Screen Encounters
          </p>
        )}
        <div className='flex flex-col items-center gap-8 md:flex-row md:justify-center md:flex-wrap md:gap-16'>
          {list.map((obj, index) => (
            <Item item={obj} key={index} />
          ))}
        </div>
      </Element>
    )
  }

  return <Element name='list'></Element>
}

export default List
