import React from 'react'
import { scroller } from 'react-scroll'

function Button() {
  const options = {
    delay: 500,
    duration: 750,
    smooth: true,
  }
  return (
    <>
      <button
        className='border-black border-2 rounded-md py-2 bg-slate-950 text-white hover:scale-105 transition'
        onClick={() => scroller.scrollTo('list', options)}
        type='submit'
      >
        Search
      </button>
    </>
  )
}

export default Button
