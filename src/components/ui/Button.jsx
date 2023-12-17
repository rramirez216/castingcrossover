import React from 'react'

function Button({ setSubmitButtonClicked, submitButtonClicked }) {
  return (
    <>
      <button
        className='border-black border-2 rounded-md py-2 bg-slate-950 text-white hover:scale-105 transition'
        onClick={() => {
          setSubmitButtonClicked(!submitButtonClicked)
        }}
        type='submit'
      >
        Search
      </button>
    </>
  )
}

export default Button
