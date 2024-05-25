import React from 'react'
import Item from './Item'
import SortBy from './SortBy'
import { Element } from 'react-scroll'

function List({
  list,
  total,
  selectedOption,
  setSelectedOption,
  radioOrder,
  setRadioOrder,
}) {
  let sortedList
  if (list) {
    sortedList = sorter([...list], radioOrder)
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
        <SortBy
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          radioOrder={radioOrder}
          setRadioOrder={setRadioOrder}
        />
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

const sorter = (arr, str) => {
  if (str === 'ascending') {
    return sortListByAscending(arr)
  } else {
    return sortListByDescending(arr)
  }
}

const sortListByDescending = (arr) => {
  return arr.sort((movieOne, movieTwo) =>
    movieOne.release_date > movieTwo.release_date
      ? -1
      : movieOne.release_date < movieTwo.release_date
      ? 1
      : 0
  )
}

const sortListByAscending = (arr) => {
  return arr.sort((movieOne, movieTwo) =>
    movieOne.release_date > movieTwo.release_date
      ? 1
      : movieOne.release_date < movieTwo.release_date
      ? -1
      : 0
  )
}
