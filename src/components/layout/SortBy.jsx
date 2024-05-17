import React from 'react'
import {
  ArrowDown01,
  ArrowUp01,
  ArrowDownAZ,
  ArrowUpAZ,
  ArrowUp,
  ArrowDown,
} from 'lucide-react'

function SortBy() {
  return (
    <div>
      <label>Sort By: </label>
      <select>
        <option value=''>Release Date</option>
        <option value=''>Alphabetical</option>
      </select>

      <input type='radio' name='asc' id='' />
      <label htmlFor='asc'>
        <ArrowUp className='inline-block' />
      </label>
      <input type='radio' name='desc' id='' />
      <label htmlFor='desc'>
        <ArrowDown className='inline-block' />
      </label>
    </div>
  )
}

export default SortBy
