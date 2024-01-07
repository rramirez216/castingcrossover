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
    <div className='flex border-b first:border-t border-black p-4 gap-8 text-base'>
      <div className='w-24'>{moviePoster}</div>
      <div className='flex flex-col text-left text-ellipsis whitespace-nowrap'>
        <p className='font-bold'>{title}</p>
        <p className='black'>{role}</p>
        <p className='black'>{roleTwo}</p>
        <p className='black'>{`${release_date.slice(0, 4)}`}</p>
      </div>
    </div>
  )
}

export default Item
