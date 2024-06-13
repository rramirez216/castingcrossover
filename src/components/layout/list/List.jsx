import React from 'react'
import Item from '../Item'
import SortBy from '../SortBy'
import { Element } from 'react-scroll'
import sorter from './List.helpers'

function List({
  list,
  total,
  selectedOption,
  setSelectedOption,
  sortOrder,
  setSortOrder,
}) {
  let sortBy = <div></div>
  let sortedList
  if (list) {
    sortedList = sorter([...list], sortOrder, selectedOption)
    sortBy = (
      <SortBy
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    )
    console.log(sortedList)
  }
  if (list) {
    return (
      <Element className='text-2xl text-center pb-16 max-w-6xl' name='list'>
        {typeof total === 'string' ? (
          <div className='text-3xl mb-16'>
            <p>{total}</p>
          </div>
        ) : (
          <p className='text-3xl mb-16'>
            <span className='font-bold'>{total}</span> On-Screen Encounters
          </p>
        )}
        {/* flex flex-col items-center md:flex-row md:justify-center md:flex-wrap md:gap-16 */}
        {sortBy}
        <ul className=''>
          {sortedList.map((obj, index) => (
            <Item item={obj} key={index} />
          ))}
        </ul>
      </Element>
    )
  }

  return <Element name='list'></Element>
}

export default List
