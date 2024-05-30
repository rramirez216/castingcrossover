import React from 'react'

function SortOrderButton({ sortOrder, setSortOrder }) {
  let leftArrow = sortOrder === 'descending' ? 'blue' : 'black'
  let rightArrow = sortOrder === 'descending' ? 'black' : 'blue'

  return (
    <button
      onClick={() =>
        sortOrder === 'descending'
          ? setSortOrder('ascending')
          : setSortOrder('descending')
      }
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='200'
        height='200'
        viewBox='0 0 24 24'
        fill='none'
        stroke='black'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='lucide lucide-arrow-down-up'
      >
        <path d='m3 16 4 4 4-4' stroke={leftArrow} />
        <path d='M7 20V4' stroke={leftArrow} />
        <path d='m21 8-4-4-4 4' stroke={rightArrow} />
        <path d='M17 4v16' stroke={rightArrow} />
      </svg>
    </button>
  )
}

export default SortOrderButton
