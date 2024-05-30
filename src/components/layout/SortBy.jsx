import React from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'
import Input from '../ui/Input'
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
      {/* <input
        type='radio'
        name='sort'
        id='ascending'
        checked={radioOrder === 'ascending'}
        value='ascending'
        onChange={(event) => setRadioOrder(event.target.value)}
      />

      <label htmlFor='ascending'>
        <ArrowUp className='inline-block' />
      </label>
      <input
        type='radio'
        name='sort'
        id='descending'
        checked={radioOrder === 'descending'}
        value='descending'
        onChange={(event) => setRadioOrder(event.target.value)}
      /> */}
      <label htmlFor='descending'>
        <ArrowDown className='inline-block' />
      </label>
    </div>
  )
}

export default SortBy
