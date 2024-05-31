import React from 'react'
import SortOrderButton from '../ui/SortOrderButton'

function SortBy({
  selectedOption,
  setSelectedOption,
  sortOrder,
  setSortOrder,
}) {
  return (
    <div className='text-base'>
      <label htmlFor='sortBy'>Sort By: </label>
      <select
        className=''
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
        id='sortBy'
      >
        <option value='date'>Release Date</option>
        <option value='alphabetical'>Alphabetical</option>
      </select>
      <SortOrderButton sortOrder={sortOrder} setSortOrder={setSortOrder} />
    </div>
  )
}

export default SortBy
