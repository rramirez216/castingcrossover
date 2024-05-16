import React from 'react'
import { ArrowDown01, ArrowUp01, ArrowDownAZ, ArrowUpAZ } from 'lucide-react'

function SortBy() {
  return (
    <select>
      <option value=''>Release Date</option>
      <option value=''>Alphabetical</option>
    </select>
  )
}

export default SortBy

//TODO: create Select tag with the option tags as children
