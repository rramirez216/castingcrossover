import React from 'react'
import { scroller } from 'react-scroll'

function Button() {
  const options = {
    delay: 300,
    duration: 550,
    smooth: true,
  }
  return (
    <button
      className='border-black border-2 rounded-md py-2 bg-slate-950 text-white hover:scale-105 transition'
      onClick={() => {
        scroller.scrollTo('list', options)
      }}
      type='submit'
      aria-required
    >
      Search
    </button>
  )
}

export default Button
