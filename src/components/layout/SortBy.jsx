import React from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'
import Input from '../ui/Input'

function SortBy() {
  return (
    <div className='text-base'>
      <label>Sort By: </label>
      <select>
        <option value=''>Release Date</option>
        <option value=''>Alphabetical</option>
      </select>

      <input type='radio' name='sort' id='' />
      <label htmlFor='sort'>
        <ArrowUp className='inline-block' />
      </label>
      <input type='radio' name='sort' id='' />
      <label htmlFor='sort'>
        <ArrowDown className='inline-block' />
      </label>
    </div>
  )
}

export default SortBy
