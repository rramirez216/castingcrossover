import React from 'react'
import SortOrderButton from '../ui/SortOrderButton'

function SortBy({
  selectedOption,
  setSelectedOption,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className='flex justify-evenly items-center text-base mb-2'>
      <div>
        <label className='mr-2' htmlFor='sortBy'>
          Sort By:
        </label>
        <select
          className='border-2 border-black'
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
          id='sortBy'
        >
          <option value='date'>Release Date</option>
          <option value='alphabetical'>Alphabetical</option>
        </select>
      </div>
      <SortOrderButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </div>
  )
}

export default SortBy
