import React from 'react'

function Item({ item }) {
  const { title, poster_path, release_date, role, roleTwo } = item
  let moviePoster = 'no image available'

  if (poster_path)
    moviePoster = (
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} movie poster`}
        className='w-full'
      />
    )
  return (
    // <div className='max-w-xs text-center shadow-ss p-4'>
    //   <div className='mb-2'>{moviePoster}</div>
    //   <p className=''>{`(${release_date.slice(0, 4)})`}</p>
    //   <p>{title}</p>
    // </div>

    <div className='flex border-b first:border-t border-black p-4 gap-8'>
      <div className='w-24'>{moviePoster}</div>
      <div className='flex flex-col'>
        <p>{title}</p>
        <p>{role}</p>
        <p>{roleTwo}</p>
        <p>{`${release_date.slice(0, 4)}`}</p>
      </div>
    </div>
  )
}

export default Item
